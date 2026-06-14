// Archivo: App.jsx
import TodoList from "./TodoList";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function App() {
    return (
        <div style={{ backgroundColor: "#e0e0e0", minHeight: "100vh" }}>
            <CssBaseline />

            {/* Nuestra Barra de Navegación Premium */}
            <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}>
                        React Todo List
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* La Lista */}
            <TodoList />

        </div>
    );
}