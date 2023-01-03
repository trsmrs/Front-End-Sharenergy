import {HeaderGlobal, HeaderLogin} from '../Components/Header'




 export function TemplateDefault({children}){
    return(
         <>
         <HeaderGlobal />
         {children}
         </>   
    )
}
 export function TemplateLogin ({children}){
    return(
         <>
         <HeaderLogin />
         {children}
         </>   
    )
}


