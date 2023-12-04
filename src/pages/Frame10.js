import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Frame10 = () => {
  const navigate = useNavigate();

  const onText8Click = useCallback(() => {
    navigate("/notice");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/orderlist");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/basket");
  }, [navigate]);

  const onButton3Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onButton4Click = useCallback(() => {
    navigate("/notice");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1526px] overflow-hidden text-left text-5xl text-dimgray-300 font-pretendard">
      <div className="absolute bottom-[0px] left-[0px] w-[1920px] h-[406px] text-smi font-noto-sans-kr">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
        <div className="absolute h-[16.26%] w-[22.71%] top-[63.55%] right-[10.36%] bottom-[20.2%] left-[66.93%] text-center text-mini text-white font-pretendard">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs bg-darkturquoise-100" />
          <div className="absolute h-[40.91%] w-[40.37%] top-[30.3%] left-[29.82%] leading-[100%] font-semibold flex items-center">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">대량구매 및 제휴문의</p>
              <p className="m-0">giftyseller@naver.com</p>
            </span>
          </div>
        </div>
        <div className="absolute top-[5.17%] left-[23.75%] leading-[19.5px]">
          마이페이지
        </div>
        <div className="absolute top-[5.17%] left-[19.9%] leading-[19.5px]">
          이벤트
        </div>
        <div className="absolute top-[5.17%] left-[15.68%] leading-[19.5px]">
          공지사항
        </div>
        <div className="absolute top-[28.08%] left-[66.82%] text-lgi-5 leading-[23.4px]">
          고객센터
        </div>
        <div className="absolute top-[calc(50%_-_59.1px)] left-[1283px] flex flex-row items-start justify-start pt-0 pb-[0.2999992370605469px] pr-[0.75px] pl-0 text-[21.75px] font-font-awesome-5-free">
          <div className="relative leading-[27.3px]"></div>
        </div>
        <div className="absolute top-[calc(50%_-_59.6px)] left-[1318.8px] flex flex-row items-start justify-start pt-0 px-0 pb-[0.2999992370605469px] text-[22.75px]">
          <div className="relative leading-[27.3px]">
            <span>02-</span>
            <b>1234-5678</b>
          </div>
        </div>
        <div className="absolute top-[187.1px] left-[1283px] leading-[23.4px]">
          <p className="m-0">- 연중무휴</p>
          <p className="m-0">- 24시간 운영</p>
        </div>
        <div className="absolute h-[9.36%] w-[10%] top-[37.93%] right-[10.52%] bottom-[52.71%] left-[79.48%] box-border flex flex-row items-start justify-center py-0 pr-[62.119998931884766px] pl-[62.880001068115234px] text-center text-xs border-[1px] border-solid border-gainsboro-300">
          <div className="relative leading-[38px]">카카오톡 문의</div>
        </div>
        <div className="absolute h-[9.36%] w-[10%] top-[48.74%] right-[10.52%] bottom-[41.9%] left-[79.48%] box-border flex flex-row items-start justify-center py-0 pr-[76.37000274658203px] pl-[76.62999725341797px] text-center text-xs border-[1px] border-solid border-gainsboro-300">
          <div className="relative leading-[38px]">네이버 톡톡 문의</div>
        </div>
        <img
          className="absolute h-[0.25%] w-full top-[-0.12%] right-[0%] bottom-[99.88%] left-[0%] rounded-10xs max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector-18.svg"
        />
        <img
          className="absolute h-[0.25%] w-full top-[15.15%] right-[0%] bottom-[84.61%] left-[0%] rounded-10xs max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector-18.svg"
        />
        <div className="absolute h-[42%] w-[21.1%] top-[31.03%] right-[61.97%] bottom-[26.97%] left-[16.93%]">
          <div className="absolute top-[0%] left-[0%] text-mini leading-[22.5px]">
            (주)기프티셀러
          </div>
          <div className="absolute top-[48.5px] left-[0.5px] leading-[23.4px] whitespace-pre-wrap flex items-center w-[299px] h-[29px] text-gray-800">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0 text-dimgray-300">&nbsp;</p>
              <p className="m-0">
                <span>{`사업장 주소 : (12345) 부산광역시 사하구 `}</span>
                <span className="text-dimgray-300"> | 대표 : 홍길동</span>
              </p>
              <p className="m-0">사업자 등록번호 : 123-45-67890</p>
            </span>
          </div>
          <div className="absolute top-[75.7px] left-[183.1px] leading-[23.4px] font-font-awesome-5-free">
            
          </div>
          <div className="absolute top-[74.7px] left-[196.1px] leading-[23.4px]">
            {" "}
            | 통신판매업신고 : 제2023-1234-5678
          </div>
          <div className="absolute top-[99.5px] left-[0.5px] leading-[23.4px] text-gray-800">
            <p className="m-0">
              개인정보 관리책임자 : 홍길동 | 팩스번호 : 02-2272-7165
            </p>
            <p className="m-0">이메일 : interpro93@naver.com</p>
            <p className="m-0">
              Copyright ⓒ 2023 기프티셀러 All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-[270px] left-[calc(50%_-_222px)] text-17xl font-extrabold text-gray-400 text-center flex items-center justify-center w-[444px] h-[39px]">
        공지사항
      </div>
      <div
        className="absolute top-[367px] left-[calc(50%_-_197px)] text-xl font-semibold text-lightgray-100 text-center flex items-center justify-center w-[84px] h-px cursor-pointer"
        onClick={onText8Click}
      >
        공지사항
      </div>
      <div className="absolute top-[367px] left-[calc(50%_+_113px)] text-xl font-semibold text-darkturquoise-100 text-center flex items-center justify-center w-[84px] h-px">
        FAQ
      </div>
      <div className="absolute top-[391px] left-[960px] bg-darkturquoise-100 w-[310px] h-[5px]" />
      <div className="absolute top-[394px] left-[650px] bg-lightgray-100 w-[310px] h-0.5" />
      <div className="absolute top-[434px] left-[295px] bg-gray-500 box-border w-[1330px] h-20 border-b-[1px] border-solid border-lightgray-100" />
      <div className="absolute top-[514px] left-[295px] bg-gray-500 box-border w-[1330px] h-20 border-b-[1px] border-solid border-lightgray-100" />
      <div className="absolute top-[594px] left-[295px] bg-gray-500 box-border w-[1330px] h-20 border-b-[1px] border-solid border-lightgray-100" />
      <div className="absolute top-[754px] left-[295px] bg-gray-500 box-border w-[1330px] h-20 border-b-[1px] border-solid border-lightgray-100" />
      <div className="absolute top-[674px] left-[295px] bg-gray-500 box-border w-[1330px] h-20 border-b-[1px] border-solid border-lightgray-100" />
      <div className="absolute top-[834px] left-[295px] bg-gray-500 box-border w-[1330px] h-20 border-b-[1px] border-solid border-lightgray-100" />
      <div className="absolute top-[910px] left-[295px] bg-gray-500 box-border w-[1330px] h-20 border-b-[1px] border-solid border-lightgray-100" />
      <div className="absolute top-[455px] left-[325px] flex items-center w-[292px] h-[39px]">
        질문의 제목을 적는 곳입니다.
      </div>
      <div className="absolute top-[535px] left-[325px] flex items-center w-[292px] h-[39px]">
        질문의 제목을 적는 곳입니다.
      </div>
      <div className="absolute top-[615px] left-[325px] flex items-center w-[292px] h-[39px]">
        질문의 제목을 적는 곳입니다.
      </div>
      <div className="absolute top-[775px] left-[325px] flex items-center w-[292px] h-[39px]">
        질문의 제목을 적는 곳입니다.
      </div>
      <div className="absolute top-[695px] left-[325px] flex items-center w-[292px] h-[39px]">
        질문의 제목을 적는 곳입니다.
      </div>
      <div className="absolute top-[855px] left-[325px] flex items-center w-[292px] h-[39px]">
        질문의 제목을 적는 곳입니다.
      </div>
      <div className="absolute top-[931px] left-[325px] flex items-center w-[292px] h-[39px]">
        질문의 제목을 적는 곳입니다.
      </div>
      <div className="absolute top-[450px] left-[1569px] text-21xl">+</div>
      <div className="absolute top-[530px] left-[1569px] text-21xl">+</div>
      <div className="absolute top-[610px] left-[1569px] text-21xl">+</div>
      <div className="absolute top-[770px] left-[1569px] text-21xl">+</div>
      <div className="absolute top-[690px] left-[1569px] text-21xl">+</div>
      <div className="absolute top-[850px] left-[1569px] text-21xl">+</div>
      <div className="absolute top-[926px] left-[1569px] text-21xl">+</div>
      <img
        className="absolute right-[35px] bottom-[441px] w-[120px] h-[120px]"
        alt=""
        src="/-btn.svg"
      />
      <div className="absolute right-[50px] bottom-[566px] w-[90px] h-[90px] text-center text-45xl text-limegreen-200">
        <div className="absolute right-[0px] bottom-[0px] rounded-[50%] bg-white shadow-[0px_0px_15px_rgba(232,_232,_232,_0.5)] w-[90px] h-[90px]" />
        <div className="absolute right-[30.6px] bottom-[20.6px] font-black flex items-center justify-center w-[29.7px] h-[48.8px]">
          N
        </div>
      </div>
      <div className="absolute top-[1031px] left-[955px] bg-darkturquoise-100 w-12 h-12" />
      <div className="absolute top-[1044px] left-[975px] text-lg font-semibold text-white text-center">
        1
      </div>
      <div className="absolute top-[1044px] left-[1026px] text-lg font-semibold text-black text-center">
        2
      </div>
      <img
        className="absolute top-[1048.9px] left-[1063.3px] w-[9.8px] h-[11.3px]"
        alt=""
        src="/polygon-1.svg"
      />
      <header
        className="absolute top-[0px] left-[0px] w-[1920px] h-[210px] text-center text-base text-dimgray-100 font-pretendard"
        id="header"
      >
        <div className="absolute top-[90px] left-[0px] rounded-t-none rounded-b-3xs bg-white w-[1920px] h-[120px]" />
        <button className="cursor-pointer py-[13px] px-[15px] bg-white absolute top-[126px] left-[300px] rounded-9xl box-border w-[90px] overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-gainsboro-100">
          <div className="relative text-base font-medium font-pretendard text-dimgray-100 text-center">
            카페
          </div>
        </button>
        <div className="absolute top-[126px] left-[400px] rounded-9xl bg-white overflow-hidden flex flex-row items-center justify-center py-[13px] px-[15px] border-[1px] border-solid border-gainsboro-100">
          <div className="relative font-medium">패션/뷰티</div>
        </div>
        <div className="absolute top-[126px] left-[501px] rounded-9xl bg-white overflow-hidden flex flex-row items-center justify-center py-[13px] px-[15px] border-[1px] border-solid border-gainsboro-100">
          <div className="relative font-medium">햄버거/피자</div>
        </div>
        <div className="absolute top-[126px] left-[616px] rounded-9xl bg-white overflow-hidden flex flex-row items-center justify-center py-[13px] px-[15px] border-[1px] border-solid border-gainsboro-100">
          <div className="relative font-medium">치킨</div>
        </div>
        <div className="absolute top-[126px] left-[684px] rounded-9xl bg-white overflow-hidden flex flex-row items-center justify-center py-[13px] px-[15px] border-[1px] border-solid border-gainsboro-100">
          <div className="relative font-medium">데이터</div>
        </div>
        <div className="absolute top-[126px] left-[766px] rounded-9xl bg-white overflow-hidden flex flex-row items-center justify-center py-[13px] px-[15px] border-[1px] border-solid border-gainsboro-100">
          <div className="relative font-medium">주유권</div>
        </div>
        <div className="absolute top-[126px] left-[848px] rounded-9xl bg-white overflow-hidden flex flex-row items-center justify-center py-[13px] px-[15px] border-[1px] border-solid border-gainsboro-100">
          <div className="relative font-medium">영화/도서/엔터</div>
        </div>
        <button className="cursor-pointer [border:none] py-[13px] px-[15px] bg-gray-400 absolute top-[126px] left-[200px] rounded-9xl w-[90px] overflow-hidden flex flex-row items-center justify-center box-border">
          <div className="relative text-base font-medium font-pretendard text-white text-center">
            전체
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[142px] left-[1666px] w-[88px] h-[16.5px]">
          <img
            className="absolute top-[2.5px] left-[71.5px] w-[18px] h-[10.6px]"
            alt=""
            src="/vector-28.svg"
          />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-lg font-medium font-pretendard text-dimgray-100 text-center flex items-center justify-center w-[63px] h-[16.5px]">
            열기
          </button>
        </button>
        <header className="absolute top-[0px] left-[0px] w-[1920px] h-[90px] text-center text-lg text-darkturquoise-800 font-pretendard">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-darkturquoise-800" />
          <div className="absolute top-[30px] left-[1475px] flex flex-row items-center justify-start gap-[60px]">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg leading-[82px] font-pretendard text-gray-400 text-center flex items-center justify-center w-[63px] h-[30px] shrink-0"
              onClick={onButton1Click}
            >
              주문조회
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg leading-[46px] font-pretendard text-gray-400 text-center flex items-center justify-center w-[81px] h-4 shrink-0"
              onClick={onButton2Click}
            >
              장바구니
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg leading-[46px] font-pretendard text-gray-400 text-center flex items-center justify-center w-[81px] h-4 shrink-0"
              onClick={onButton3Click}
            >
              마이페이지
            </button>
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[30px] left-[1345px] text-lg leading-[82px] font-pretendard text-gray-400 text-center flex items-center justify-center w-[63px] h-[30px]"
            onClick={onButton4Click}
          >
            공지사항
          </button>
          <div className="absolute h-[23.33%] w-[2.45%] top-[37.78%] left-[13.44%] leading-[82px] flex items-center justify-center">
            대표몰
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[46.67%] w-[11.35%] top-[26.67%] right-[86.3%] bottom-[26.67%] left-[2.34%] bg-[url('/public/image-2@2x.png')] bg-cover bg-no-repeat bg-[top]" />
        </header>
        <input
          className="[border:none] bg-whitesmoke-200 absolute top-[128px] left-[1151px] rounded-8xs w-[500px] h-[50px]"
          placeholder="브랜드 검색"
          type="text"
        />
      </header>
    </div>
  );
};

export default Frame10;
