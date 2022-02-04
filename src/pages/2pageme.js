import { Link } from "react-router-dom";
import { Loading } from "../components";
import { useEffect, useState } from "react";
import { getMovie } from "../api";

export function VideoPage(){
  const [url, setUrl] = useState(null);

  useEffect(() => {
    getMovie().then((data) => {
      setUrl(data);
    });
  }, []);
  return (
    <>
    <div className="has-text-right">
    <botton className="button in-small is-black"><a href="https://www.youtube.com/channel/UCMJiPpN_09F0aWpQrgbc_qg"><p className="has-text-light">キヨchannel</p></a></botton>
    </div>
      <div className="block">
      <section>
        <h2 className="title has-text-centered">神動画１０選</h2>
        <p>ここではキヨが上げた動画の中で神動画とされているもの10選を挙げている</p>
        <ol>
          <a href="https://www.youtube.com/watch?v=HmBwomWpu_8"><li>キヨ ブレーキ</li></a>
          <a href="https://www.youtube.com/watch?v=h0oTAb9Z5ZM&list=PLPUGXakMkjRET6dD-SzeY5lyBPLgE3yAN"><li>青鬼シリーズ</li></a>
          <a href="https://www.youtube.com/watch?v=G-gXirMbzFY"><li>狂い月</li></a>
          <a href="https://www.youtube.com/watch?v=xftjkw7prgQ"><li>魔女の家</li></a>
          <a href="https://www.youtube.com/watch?v=rpgd69soHzY&list=PLPUGXakMkjRHrGwYf2lHwO5rdUZOePwBd"><li>スーパーマリオメーカー</li></a>
          <a href="https://www.youtube.com/watch?v=m10Lun8SGh8&list=PLf29ez2GHmVqsT2DZJuunQe-w__BMbm55"><li>ウイイレ</li></a>
          <a href="https://www.youtube.com/watch?v=sAxqCFbstQ8&list=PLPUGXakMkjREaX-0qXS_0wUqUqvjg7ltb"><li>桃鉄シリーズ</li></a>
          <a href="https://www.youtube.com/watch?v=M204otUy2wo&list=PLPUGXakMkjREJj60lNUuRlVQkHYKcUdcn"><li>妖怪ウォッチ</li></a>
          <a href="https://www.youtube.com/watch?v=4zHoqvnn3sA"><li>偶然にも最悪な永野</li></a>
          <a href="https://www.youtube.com/watch?v=dBwjqSweKJk"><li>全く見にならない日々・キセキ</li></a>
        </ol>
      </section>
      <section>
         <h2 className="title has-text-centered">神ゲーム１2選</h2>
         <p>ここではキヨが実況動画で扱ってきたゲームの中でも、神ゲームとされているものを挙げている</p>
         <ol>
           <a href="https://www.youtube.com/watch?v=G-gXirMbzFY"><li>狂い月</li></a>
           <a href="https://www.youtube.com/watch?v=cQIOQ2yF2nA&list=PLPUGXakMkjRG7D1N7IDoxRv6pKWODtmau"><li>絆輝探偵事務所</li></a>
           <a href="https://www.youtube.com/watch?v=2oGj9js_UDM"><li>ミオの家のニャンコ</li></a>
           <a href="https://www.youtube.com/watch?v=XKyFUSkXfVM"><li>stitch girl</li></a>
           <a href="https://www.youtube.com/watch?v=-IzH8Caa6pQ&list=PLPUGXakMkjRFqTr3oJC6rpenl68kjLggj"><li>嘘つきゲーム・狼ゲーム・囚われの館</li></a>
           <a href="https://www.youtube.com/watch?v=ko1R3fDGZBk&list=PLPUGXakMkjRGclNkM02iwONpNdp5A7gar"><li>The Croocked Man</li></a>
           <a href="https://www.youtube.com/watch?v=JtzkxKBiWKQ&t=185s"><li>霧雨が降る森</li></a>
           <a href="https://www.youtube.com/watch?v=rkO5mCgedAw&list=PLPUGXakMkjREaVl4mBY7L_T_ELItWCBDT"><li>怪異症候群</li></a>
           <a href="https://www.youtube.com/watch?v=7Hi_-98D-WY"><li>As usual</li></a>
           <a href="https://www.youtube.com/watch?v=R8THyVOTAvA&list=PLPUGXakMkjREsAZNHjvwlFF5PJffjiC6d"><li>虚白ノ夢</li></a>
           <a href="https://www.youtube.com/watch?v=oGvvfuWSJB4"><li>物念世界</li></a>
           <a href="https://www.youtube.com/watch?v=xeL_YTmw200&list=PLI2ldFbap60vn37SjQUx87NOG1oEm-bhn"><li>クロエノレクイエム</li></a>
         </ol>
      </section>
    </div>
    <div className="has-text-centered">
    {
        (() => {
          if(url==null){
            return <Loading />
        }else{
            return <Showmovie url={url[0].movie}/>
        }
        })()
}
</div>
    </>
  );
}

function Showmovie(props){
  const url=props.url;
  console.log(url);
  return (
      <botton className="botton in-small is-black"><a href={url} target="_blank">Random Video</a></botton>
  );
}