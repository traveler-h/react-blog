import React from "react";
import { getFiles } from "@/api/list";
import './index.less'

const Upload =() => {
  
  const getFilesList = async () => {
    const res = await getFiles()
    console.log(res)
  }

  return (
    <div className="upload">
      444444444
      <button onClick={getFilesList}>获取数据</button>
    </div>
  )
}

export default Upload