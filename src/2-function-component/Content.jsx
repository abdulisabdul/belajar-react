import React,{useState, useEffect, useRef} from 'react'

function Content(props) {
  const [tahun, setTahun] = useState(0)
  const [tahun2, setTahun2] = useState(0)
  const prevCountRef = useRef();
  const prevCount = prevCountRef.current;
  const handleClick = (val) => {
    setTahun(prev => prev+1)
    
  }
  const callTahun = () => {
    console.log(tahun);
    // console.log(prevCount);
  }
  useEffect(() => {
    if (tahun !== 0) {
      callTahun()
      
    }
    // console.log(tahun)
    // return () => {
    //   cleanup
    // }
    prevCountRef.current = tahun;
  }, [tahun])
  
  useEffect(() => {
    console.log('component => ','content')
  })
    
    if (props.isiContent) {
      let newIsiContent = "isi konten baru"
      return (
        <div>
              {`${props.isiContent} ${tahun}`} 
              <div>
                  <button onClick={() => handleClick(2010)}>Klik aku</button>
              </div>
        </div>
      )
    } else {
      return null
    }
    
}
  
export default Content