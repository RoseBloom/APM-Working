import {Component} from '@angular/core';
import { IProduct } from './product';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ProductService } from './product.service';
@Component({
    styleUrls:['./product-list.component.css'],
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
   pageTitle : string = "Product List!";
   imageWidth: number = 50;
   imageMargin: number = 5;
   showImages:boolean = false;
   _listFilter:string;
   get listFilter():string {
       return this._listFilter;
   }
   set listFilter(value:string){
       this._listFilter = value;
       this.filteredProducts = this.listFilter? this.performFilter(this.listFilter): this.products
   }
   filteredProducts : IProduct[]
   products: IProduct[] = [
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
];
constructor(private _productService:ProductService)
{
    
}
performFilter(filterBy:string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product :IProduct)=> 
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}
toggleImg(): void {
    this.showImages = !this.showImages
}
ngOnInit(): void{
    this.products = this._productService.getProducts();
    this.filteredProducts = this.products;
}
}
