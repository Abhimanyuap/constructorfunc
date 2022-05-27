
function Product(n,c,i,p,g,s)
{
    this.name=n
    this.category=c
    this.imageUrl=i
    this.price=p
    this.gender=g
    this.sold=s
}

var arr=[]
function Myfun(event)
{
    event.preventDefault();
    var form=document.getElementById("e-commerce1");
    var name=form.name.value;
    var category=form.category.value;
    var image=form.image.value;
    var price=form.price.value;
    var gender=form.gender.value;
    var sold=form.sold.value;

    var p = new Product(name,category,image,price,gender,sold)
    arr.push(p);
    localStorage.setItem("Products",JSON.stringify(arr));
}