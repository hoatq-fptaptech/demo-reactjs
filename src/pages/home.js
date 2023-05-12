import React from "react";
import {NavLink} from "react-router-dom";
import db from "../db";
import UserContext from "../store/context";

export default class Home extends React.Component{
    static contextType = UserContext;
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            categories:[]
        }
    }
    async componentDidMount() {
        fetch("https://dummyjson.com/products?limit=20")
            .then(rs=>rs.json())
            .then(rs=>{
               //const products = rs.products;
               this.setState({data:rs.products})
            })
        this.getCategories();
        this.updateCategory();
    }

    async getCategories(){
        try {
            const cat = db.collection("categories");
            const data = await cat.where("name","==","Watch").orderBy("name","desc").limit(3).get();
            const cats = [];
            data.docs.map((doc)=>{
                const d = doc.data();
                d.id = doc.id;
                cats.push(d);
            });
            this.setState({categories:cats});
        }catch (err){
            console.log(err);
        }

    }

     addCategory(){
        try {
            const cats = db.collection("categories");
            const new_cat = {name:"Watch",slug:"watch"}
            cats.add(new_cat);
        }catch (err){
            console.log(err);
        }
    }

    updateCategory(){
        try {
            const cats = db.collection("categories").doc("KgnE0h4aQnde7NCrL9oL");
            const new_cat = {name:"Fashion2",slug:"Fashion2"}
            cats.update(new_cat);
            // cats.delete();
        }catch (err){
            console.log(err);
        }
    }

    render() {
        const cats = this.state.categories;
        const color = this.context.color;
        return (<div>
            <NavLink to="/login"  className={({ isActive }) =>
                isActive ? "active" : ""
            }>Login </NavLink>
            <h1>Home {color}</h1>
            <ul>
                {this.state.data.map((v,k)=>{
                    return <li key={k}>{v.title}</li>
                })}
            </ul>
            <h1>categories</h1>
            {
                cats.map((v,k)=>{
                    return <p key={k}>{v.name}--{v.id}</p>
                })
            }
        </div>);
    }
}