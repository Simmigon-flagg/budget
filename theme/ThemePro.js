"use client"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Decide if dark mode should be the default; this can come from user settings or system preference.
// For this example, I'm defaulting it to true.
const prefersDarkMode = true;

const themeOptions = {
    typography: {
        fontSize: 23,
        fontFamily: "'Roboto', sans-serif",
    },
    palette: {    
        // mode: prefersDarkMode ? 'dark' : 'light',
        // text: {
        //     primary: "#fff",
        // },
    }
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
