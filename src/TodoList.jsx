// Archivo: TodoList.jsx
import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TodoForm from './TodoForm';

const obtenerDatosIniciales = () => {
    const datosGuardados = localStorage.getItem("mis_tareas");
    if (!datosGuardados) return [];
    return JSON.parse(datosGuardados);
};

export default function TodoList() {
    const [tareas, setTareas] = useState(obtenerDatosIniciales);

    useEffect(() => {
        localStorage.setItem("mis_tareas", JSON.stringify(tareas));
    }, [tareas]);

    const borrarTarea = (idQueQueremosBorrar) => {
        setTareas(tareasViejas => tareasViejas.filter(t => t.id !== idQueQueremosBorrar));
    };

    const toggleTarea = (idQueQueremosCambiar) => {
        setTareas(tareasViejas => {
            return tareasViejas.map(t => {
                if (t.id === idQueQueremosCambiar) {
                    return { ...t, completada: !t.completada };
                }
                return t;
            });
        });
    };

    const agregarTarea = (textoNuevaTarea) => {
        setTareas(tareasViejas => {
            return [...tareasViejas, { id: crypto.randomUUID(), texto: textoNuevaTarea, completada: false }];
        });
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", m: 5 }}>

            <Typography variant="h3" component="h1" sx={{ mb: 3, fontWeight: "medium", color: "#333" }}>
                Mis Tareas
            </Typography>

            <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 4 }}>
                {tareas.map((tarea) => {
                    return (
                        <ListItem
                            key={tarea.id}
                            secondaryAction={
                                <IconButton edge="end" aria-label="borrar" onClick={() => borrarTarea(tarea.id)}>
                                    <DeleteIcon sx={{ color: "#e74c3c" }} />
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton role={undefined} dense onClick={() => toggleTarea(tarea.id)}>
                                <ListItemIcon>
                                    <Checkbox edge="start" checked={tarea.completada} tabIndex={-1} disableRipple />
                                </ListItemIcon>
                                <ListItemText
                                    id={`tarea-${tarea.id}`}
                                    primary={tarea.texto}
                                    sx={{ color: "black", textDecoration: tarea.completada ? "line-through" : "none" }}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
                <TodoForm agregarTarea={agregarTarea} />
            </List>
        </Box>
    );
}