export default function Header ({title,subtitle,color}){
return (

<>
<div style={{backgroundColor:color,padding:"20px"}}>

<h1>{title}</h1>
<h3>{subtitle}</h3>

</div>
</>
)
}


