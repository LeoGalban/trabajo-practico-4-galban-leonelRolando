import express from express;
import dotenv  from dotenv;
dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/api', characterRoutes);

initBD().then(() => {
    app.lisen(PORT, () => {
        console.log('servidor corriendo en http://localhost' + PORT);
    });
}
);