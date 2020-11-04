import React, { useEffect, useState } from 'react';
import {boardListType} from './BoardHome';
import {Link} from 'react-router-dom';
import path from 'path';
import './BoardList.scss';
import defaultThumbnail from '../../assets/images/board/default_thumbnail.jpg';

function BoardList({data}: {data: boardListType}){

    // console.log('data', data);

    const [tags, setTags] = useState<string[]>([]);
    const [date, setDate] = useState('');
    const [thumbImg, setThumbImg] = useState(defaultThumbnail);

    const dateForm = () =>{
        const timeStamp = data._id.toString().substring(0,8);
        const date = new Date(parseInt(timeStamp, 16) * 1000);

        const year = date.getUTCFullYear(); // 2020
        const month = checkDate(date.getUTCMonth());
        const day = checkDate(date.getUTCDay());
        const hour = checkDate(date.getUTCHours());
        const minutes = checkDate(date.getUTCMinutes());
        const seconds = checkDate(date.getUTCSeconds());

        // return `${year}.${month}.${day} ${hour}:${minutes}:${seconds}`;
        return `${year}.${month}.${day}`;
    }

    const checkDate = (date:number) =>{
        if(date.toString().length === 1){
            return "0" + date.toString();
        }else{
            return date.toString();
        }
    };

    useEffect(()=>{
        setTags(data.tags);

        if(data.thumbnailImage.length > 0){
            setThumbImg(path.resolve('./uploads', data.thumbnailImage[0].filename));
        }

        setDate(dateForm());
    }, []);

    return (
            <li className="bb-board-list__body">
                <Link to={`/board/view/${data._id}`}>
                    <div className="bb-board-list__contents-wrapper">
                        <div className="bb-board-list__article-wrapper">
                            <div>
                                <div className="bb-board-list__article-title">{data.title}</div>
                                <div className="bb-board-list__article-tags">
                                    {data.tags.map((tag, index) => <span key={index}>{tag}</span>)}
                                </div>
                            </div>
                            
                            {/* <div className="bb-board-list__article-description" dangerouslySetInnerHTML={{__html: data.description}}></div> */}
                            <ul className="bb-board-list__article-extra-info">
                                <li>{date}</li>
                                <li>{data.writer}</li>
                            </ul>
                        </div>
                        <div>
                            <figure className="bb-board-list__image" style={{backgroundImage: `url(${thumbImg})`}}/>
                        </div>
                    </div>
                </Link>
            </li>
        
    )
}

export default BoardList;