import React, { useState } from "react";


import {getAdList} from '@api/ad'
import './index.less'

const Ad = (props: any) => {
    const [adList, setAdList] = useState<any>([])
    
    React.useEffect(() => {
        const abortController = new AbortController()

        async function getList() {
            const res = await getAdList()
            setAdList(res.data.adList)
        }
    
        if (!adList.length) {
            getList()
        }

        return () => {
            abortController.abort();
        }

    }, [adList])

    return (
        <div className="ad-module">
            {adList.map((ad:any) => (
                <div className="ad-item" key={ad.id}><img src={ad.url} alt={ad.name} /></div>
            ))}
        </div>
    )
}

export default Ad

