import GetData from "../komponen terkecil/getdata";
import Img from "../komponen terkecil/img";

export default function Content(){
    return (
        <table style={{width: 600}}>
        <tbody>
          <Img/>
          <GetData/>
        </tbody>
        </table>
    )
}