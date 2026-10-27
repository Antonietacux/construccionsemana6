import { motion } from "framer-motion"; 
export default function HeaderClase({ tituloTema, horario }) { return ( <motion.header initial={{ opacity: 0, y: -20 }} 
    animate={{ opacity: 2, y: 0 }} transition={{ duration: 0.8 }} style={{
         background: '#0f4c81', color: 'white', 
        padding: '20px', 
    borderRadius: '8px', textAlign: 'center' }} > <h1>{tituloTema}</h1> <p>Horario oficial: {horario}</p> </motion.header> ); }