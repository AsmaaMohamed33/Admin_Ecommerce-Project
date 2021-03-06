import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../Services/product-service.service';
import { IProduct } from '../ViewModel/IProduct';
import { APIproductService } from '../Services/ApiServices/apiproduct.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit ,OnDestroy {

  CurrentPrd:IProduct|undefined=undefined;
  private CurrentID:number=0;
  private PrdIDsArr: number[]=[];
 // private subscriptionList: Subscription[]=[];

  constructor( private activatedRoute:ActivatedRoute ,
     private prdService:ProductServiceService ,
    private prdApiService : APIproductService,
        private router: Router
      , private location:Location){
   }

  ngOnInit(): void {

  /*  this.PrdIDsArr=this.prdService.GetArrOfIDs();
     this.activatedRoute.paramMap.subscribe(paramMap=>{
        this.CurrentID=Number(paramMap.get("pid"));
         this.CurrentPrd=this.prdService.getProductByID(this.CurrentID);
      });*/

      this.CurrentID=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    this.prdApiService.getProductByID(this.CurrentID).subscribe(prd=>{
     this.CurrentPrd=prd;

     console.log(this.CurrentPrd)
    });

      
  }

  
  ngOnDestroy(): void {
    // for (let subscription of this.subscriptionList)
    // {
    //   subscription.unsubscribe();
    // }
  }


  goBack()
  {
    this.location.back();
  }

  PrevProduct()
  {
    let currIndex=this.PrdIDsArr.findIndex((val)=>val==this.CurrentID);
    if(currIndex!=0)
    {
      this.CurrentID=this.PrdIDsArr[currIndex-1];
      this.router.navigate(['/Products',this.CurrentID]);
    }
  }

  NextProduct()
  {
    let currIndex=this.PrdIDsArr.findIndex((val)=>val==this.CurrentID);
    if(currIndex<this.PrdIDsArr.length-1)
    {
      this.CurrentID=this.PrdIDsArr[currIndex+1];
      this.router.navigate(['/Products', this.CurrentID]);
    }

  }

  FirstIndex():boolean
  {
    return this.CurrentID==this.PrdIDsArr[0];
  }

  lastIndex():boolean
  {
    return this.CurrentID==this.PrdIDsArr[this.PrdIDsArr.length-1];
  }

}


