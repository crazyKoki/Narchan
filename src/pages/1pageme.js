import { Link } from "react-router-dom";
import { Loading } from "../components";

export function TopPage(){

  return (
    <>
    <div className="has-text-right">
    <botton className="button in-small is-black"><a href="https://www.youtube.com/channel/UCMJiPpN_09F0aWpQrgbc_qg"><p className="has-text-light">キヨchannel</p></a></botton>
    </div>
      <div className="block">
         <table class="table is-fullwidth">
           <caption className="title">Profile</caption>
           <thead>
             <tr>
               <td>Question</td>
               <td>Answer(2022年2月時点)</td>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td>出身地</td>
               <td>北海道</td>
             </tr>
             <tr>
               <td>年齢</td>
               <td>30~32</td>
             </tr>
             <tr>
               <td>身長</td>
               <td>182cm</td>
             </tr>
             <tr>
               <td>活動期間</td>
               <td>2009年10月20日</td>
             </tr>
             <tr>
               <td>登録者数</td>
               <td>358万</td>
             </tr>
             <tr>
               <td>どんな実況者？</td>
               <td>
               明るくテンションの高い実況スタイル。だが長時間の撮影ではテンションを維持しきれず素の口調で喋っていたり、ゲームで負けが込んだ時やクリアに時間がかかっている時に実況を放棄して無言でプレイしたりしていることもしばしばあり、本人もそういったシーンを敢えてカットせずに動画に残していることが多い。

              悪口や暴言、下ネタを発することが多く、前述の実況スタイルから、同じグループのフジには「テンションと勢いと大声と暴言でのし上がった」と言われている。しかし根は真面目な性格であり、元々は公務員を目指していたという。また、実況するゲームでも小さい子供や母親などに対しては優しさを前面に出した接し方をすることが多い。 
               </td>
             </tr>
             <tr>
               <td>関連人物channel</td>
               <td><a href="https://www.youtube.com/user/thefujifactory?app=desktop">フジ</a>,<a href="https://www.youtube.com/channel/UCmxAWbOvT8osBX_tGMVFVPA">ヒラ</a>,<a href="https://www.youtube.com/user/suketubesaiore"こーすけ></a>,<a href="https://www.youtube.com/c/retokani">レトルト</a>,<a href="https://www.youtube.com/c/ushizawa16">牛沢</a>,<a href="https://www.youtube.com/c/Gatchman666">ガッチマン</a></td>
             </tr>
             
           </tbody>
           
         </table>
        
      </div>
      
      <div className="has-text-centered">
        <Link to="/video" className="botton is-black">おもしろ・名作動画</Link>
      </div>
    </>
  );
}