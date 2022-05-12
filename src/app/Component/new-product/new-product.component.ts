import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/ViewModel/ICategory';
import { IProduct } from 'src/app/ViewModel/IProduct';
import{ ProductServiceService} from 'src/app/Services/product-service.service'
import { APIproductService } from 'src/app/Services/ApiServices/apiproduct.service';
import {  ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

 NewProd: IProduct={} as IProduct;
 CatList: ICategory[]=[];
 ProductId : number=0;
 

  constructor(private prdAPIService:APIproductService,private router :Router, private activatedRoute:ActivatedRoute) { 
    this.CatList=[
      {ID:1, Name: 'Laptops'},
      {ID:2, Name: 'Tablets'},
      {ID:3, Name:'Mobiles'}
    ];
  }
  

 
 

  ngOnInit(): void {

      this.prdAPIService.getProductByID(this.NewProd.id).subscribe(data => {
      this.NewProd = data;  
    });

    this.ProductId=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    if(this.ProductId !=0)
    {
      this.prdAPIService.getProductByID(this.ProductId).subscribe(prd=>{
        this.NewProd=prd;
      });

    

      
  }

 
  }

  saveProduct()
  {
    this.ProductId=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    if(this.ProductId!=0)
    {
      this.prdAPIService.updateProduct(this.NewProd,+this.ProductId).subscribe(prd=>{
        this.router.navigate(['/Products']);
      });
    }
    else
    {
      this.prdAPIService.addNewProduct(this.NewProd).subscribe(prd=>{
        this.router.navigate(['/Products']);
      });
    }
  }

  
}
