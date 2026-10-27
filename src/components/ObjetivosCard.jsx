import { motion } from "framer-motion"; 
export default function ObjetivosCard({ objetivo }) { return ( <motion.div whileHover={{ scale: 1.03, 
    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 300 }} style={{ 
        background: '#ffffff', border: '1px solid #cbd5e1', padding: '20px', borderRadius: '8px', margin: '10px 0', 
        cursor: 'pointer' }} > <h3 style={{ color: '#0f4c81', margin: '0 0 8px 0' }}>Meta de Aprendizaje</h3> <p style={{ margin: 0, 
    color: '#334155' }}>{objetivo}</p> </motion.div> ); }