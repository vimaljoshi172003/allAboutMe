// import { ThemeProvider } from 'react-ui'
// import { createContext, useReducer } from "react";

// export const TheamContext = createContext();
// const INITIAL_STATE={darkMode:false};

// const themeReducer=(state,action)=>{
//     switch (action.type){
//         case "TOGGLE":
//             return {darkMode:!state.darkMode};
//             default:
//                 return state;
//     }
// };

// export const ThemeProvider = (props)=>{
//     const [state, dispatch]=useReducer(reducer,initialState)
//     return (
//         <ThemeProvider value={(state,dispatch)}>
//             {props.children}
//         </ThemeProvider>
//     )
// }