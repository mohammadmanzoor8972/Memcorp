import { Injectable } from "@angular/core";

@Injectable()
export class Constant {
    private APIPATH = "https://evening-tor-29203.herokuapp.com/api/v1/"
  
    public GETPRODUCTLIST = this.APIPATH+"products";
    public GETBRANDLIST =this.APIPATH+"brands";
    public GETCATEGORYLIST =this.APIPATH+"categories";
    public GETACESSORIES = this.APIPATH+"accessories";
    public POSTPRODUCT = this.APIPATH+"products/buynow";
    public POSTACCESSORIES = this.APIPATH+"accessories/buynow";

}