import {useRouter} from 'next/router';
import{useState,useEffect} from 'react';
import { isAuthenticated } from '@/lib/authenticate';
import { favoritesAtom,searchHistoryAtom } from '@/store';
import { useAtom } from 'jotai';
import { getFavourites,getHistory } from '@/lib/userData';
const PUBLIC_PATHS=['/login','/','/_error','/register'];
export default function RouteGuard(props){

    const [favourites,setFavourites]=useAtom(favoritesAtom);
    const [history,setHistory]=useAtom(searchHistoryAtom);
     const [authorized,setAuthorized]=useState(false);
     async function updatAtomms(){
        setFavourites(await getFavourites());
        setHistory(await getHistory());
      
      }
     const router=useRouter();
    useEffect(()=>{
      updatAtomms();
        authCheck(router.pathname);
        router.events.on('routeChangeComplete',authCheck);
        return ()=>{
            router.events.off('routerChangeComplete',authCheck);
        };
    },[]);

    function authCheck(url){
        const path=url.split('?')[0];
        if(!isAuthenticated() && !PUBLIC_PATHS.includes(path)){
           setAuthorized(false);
           router.push('/login');
        }
        else{
            setAuthorized(true);
        }
    }

    

    return <>{authorized===true && props.children} </>
}