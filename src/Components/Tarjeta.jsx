import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import instance from '../Service/Axios'

function Tarjeta() {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  
    useEffect(
      ()=>{
        instance.get("products")
        .then(res=>{
          console.log(res.data)
          if(res.data){
            setProductos(res.data)
            setLoading(false)
          }
        })
        console.log("ya ya")
    },[])

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={producto.image}
        alt={producto.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {producto.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {producto.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
        <Button size="small">Agregar al carrito</Button>
      </CardActions>
    </Card>
  );
}
export default Tarjeta