// Archivo: TodoForm.jsx
import { useState } from "react";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import CreateIcon from "@mui/icons-material/Create";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

export default function TodoForm({ agregarTarea }) {
    const [texto, setTexto] = useState("");

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        if (!texto) return;

        agregarTarea(texto);
        setTexto("");
    };

    return (
        <ListItem>
            <form onSubmit={manejarEnvio} style={{ width: "100%" }}>
                <TextField
                    fullWidth
                    label="Añadir nueva tarea"
                    variant="outlined"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}

                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="crear tarea" edge="end" type="submit">
                                    <CreateIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
        </ListItem>
    );
}