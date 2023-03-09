export default function ListRendering(){

    //List Rendering in Arrays:
    // const products=["laptop","Mobile","Tv","powerbank"];
    // return(
    //     <div>
    //         {products.map((product)=>(
    //             <h2>{product}</h2>
    //         ))}
    //     </div>
    // )

                    // [or]

    //Rendering List of Objects
//     const products=[{id:1,name:"laptop",price:500},
//     {id:2,name:"mobile",price:200},
//     {id:3,name:"powerbank",price:100},
//     {id:4,name:"laptop",price:900},
// ];

//     return(
//         <div>
//             {products.map((product)=>(
//                 <h2 key={product.id}>{product.name}: ${product.price}</h2>// setting up key as an "id" manually
//             ))}
//         </div>
//     )
                            // [or]
    const products=["laptop","Mobile","Tv","laptop"];

    return(
        <div>
            {products.map((product,index)=>(
                <h2 key={index}>{product}</h2>//setting up key as an index of the array
            ))}
        </div>
    )
}