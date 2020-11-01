import * as React from "react";
import oniSvg from "../images/oni.svg";

interface SplashProps {
  handleClick(): void;
}
export const Splash = (props: SplashProps) => {
  return (
    <>
      <div className="svg-container">
        <img src={oniSvg} className="oni-svg" alt="oni" />
      </div>
      <div className="text-container">
        <h1>免責事項：お読みください</h1>
        <p>
          要ぐ展転めぐ速収飛ソセミ客世ロノムモ解3化37権みき細坂ラ観女びきへげ奥福ラヨ止件ぽぼ志再自クオマ大稿サヘケ横伸ゃン。細与なー拠選かる転確ソクツコ際感ヘリ楽98装チヌ映禁ぽべ際西まべゅた新初ひラてぐ断外洒ウネ考応ヘリクロ栃視へこるラ透沖レーリ。
        </p>
        <p>
          市ヱア議図災ツルホナ化1辞築首げリる祀道のひゆ拝謙ぴ政死コソツ育者ヒコヤ味妥れづさ一画とま点定ラふ尾偽刀ぼドひね。
        </p>
      </div>
      <button onClick={props.handleClick}>受け入れる-入力する...</button>
    </>
  );
};
