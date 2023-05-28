
import { useEffect, useState } from "react";
import { imgList } from "./utils/common";
import { styled } from "styled-components";


const Image = ({num}) => {
    const [imgs, setImgs] = useState([]);

    const StyledImage = styled.img`
    width: 300px;
    height: 400px;
    max-width: 100%;
`;    

useEffect(() => {
    const images = imgList();
    setImgs(images);
},[]);
return (
    <div style={{flexGrow: 1, flexBasis:'16rem'}}>
        <StyledImage src={imgs[num]} alt='cricketer'/>
    </div>
)
}

export default Image;