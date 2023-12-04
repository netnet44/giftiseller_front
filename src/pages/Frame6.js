import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Frame6 = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/message");
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
    <div className="relative bg-white w-full h-[1785px] overflow-hidden text-left text-lg text-gray-400 font-pretendard">
      <div className="absolute top-[1067px] left-[434px] rounded-8xs bg-gray-100 box-border w-[490px] h-[55px] border-[1px] border-solid border-gainsboro-100" />
      <div className="absolute top-[270px] left-[732px] text-17xl font-extrabold text-center flex items-center justify-center w-[444px] h-[39px]">
        장바구니
      </div>
      <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] h-[406px] text-smi text-dimgray-300 font-noto-sans-kr">
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
      <div className="absolute top-[329px] left-[1521px] rounded-8xs bg-darkturquoise-500 h-10 overflow-hidden flex flex-row items-center justify-center py-1.5 px-[13px] box-border text-center text-darkturquoise-100">
        <div className="relative leading-[82px] font-semibold">선택삭제</div>
      </div>
      <div className="absolute top-[329px] left-[1438px] rounded-8xs box-border h-10 overflow-hidden flex flex-row items-center justify-center py-1.5 px-[13px] text-center text-dimgray-100 border-[1px] border-solid border-dimgray-400">
        <div className="relative leading-[82px]">비우기</div>
      </div>
      <div className="absolute top-[825px] right-[621px] text-3xl font-medium text-white text-right flex items-center w-[312px] h-[17px]">
        {" "}
        110,000원
      </div>
      <div className="absolute top-[389px] left-[310px] w-[1300px] h-[330px] text-center text-black">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro-300 w-[1300px] h-[54px] opacity-[0.1]" />
        <div className="absolute top-[74px] left-[0px] rounded-sm bg-white box-border w-[1300px] h-[120px] border-[1px] border-solid border-gainsboro-100" />
        <div className="absolute top-[210px] left-[0px] rounded-sm bg-white box-border w-[1300px] h-[120px] border-[1px] border-solid border-gainsboro-100" />
        <div className="absolute top-[18px] right-[920px] text-mini flex items-center justify-center w-[138px] h-[17px]">
          상품명
        </div>
        <div className="absolute top-[126px] right-[871px] font-semibold flex items-center justify-center w-[236px] h-[17px]">
          구글기프티카드 5만원권
        </div>
        <div className="absolute top-[262px] right-[871px] font-semibold flex items-center justify-center w-[236px] h-[17px]">
          구글기프티카드 3만원권
        </div>
        <div className="absolute top-[126px] right-[512px] text-xl font-medium flex items-center justify-center w-[39px] h-[17px]">
          1
        </div>
        <div className="absolute top-[262px] right-[512px] text-xl font-medium flex items-center justify-center w-[39px] h-[17px]">
          1
        </div>
        <div className="absolute top-[126px] right-[259px] font-medium flex items-center justify-center w-[103px] h-[17px]">
          50,000원
        </div>
        <div className="absolute top-[262px] right-[259px] font-medium flex items-center justify-center w-[103px] h-[17px]">
          50,000원
        </div>
        <b className="absolute top-[126px] right-[81px] flex text-gray-400 items-center justify-center w-[103px] h-[17px]">
          50,000원
        </b>
        <b className="absolute top-[262px] right-[81px] flex text-gray-400 items-center justify-center w-[103px] h-[17px]">
          50,000원
        </b>
        <div className="absolute top-[18px] left-[702px] text-mini flex items-center justify-center w-[138px] h-[17px]">
          총수량
        </div>
        <div className="absolute top-[18px] left-[920px] text-mini flex items-center justify-center w-[138px] h-[17px]">
          판매가
        </div>
        <div className="absolute top-[18px] left-[1098px] text-mini flex items-center justify-center w-[138px] h-[17px]">
          합계액
        </div>
        <div className="absolute top-[15px] left-[55px] rounded-8xs bg-darkturquoise-600 w-[25px] h-[25px]" />
        <div className="absolute top-[122px] left-[55px] rounded-8xs bg-darkturquoise-600 w-[25px] h-[25px]" />
        <input
          className="absolute top-[258px] left-[55px] rounded-8xs bg-gray-700 box-border w-[25px] h-[25px] border-[1px] border-solid border-gainsboro-100"
          type="checkbox"
        />
        <img
          className="absolute top-[21px] left-[61px] w-3.5 h-[12.6px]"
          alt=""
          src="/vector-23.svg"
        />
        <img
          className="absolute top-[128px] left-[61px] w-3.5 h-[12.6px]"
          alt=""
          src="/vector-23.svg"
        />
        <div className="absolute top-[124px] left-[827px] rounded-3xs bg-darkturquoise-300 w-[34px] h-5" />
        <div className="absolute top-[260px] left-[827px] rounded-3xs bg-darkturquoise-300 w-[34px] h-5" />
        <div className="absolute top-[124px] left-[684px] rounded-3xs bg-silver-200 w-8 h-5" />
        <div className="absolute top-[260px] left-[684px] rounded-3xs bg-silver-200 w-8 h-5" />
        <div className="absolute top-[127px] right-[442px] text-xs text-white flex items-center justify-center w-[27px] h-[15px]">
          1
        </div>
        <div className="absolute top-[263px] right-[442px] text-xs text-white flex items-center justify-center w-[27px] h-[15px]">
          1
        </div>
        <div className="absolute top-[127px] right-[589px] text-xs text-white flex items-center justify-center w-[21px] h-[15px]">
          1
        </div>
        <div className="absolute top-[263px] right-[589px] text-xs text-white flex items-center justify-center w-[21px] h-[15px]">
          1
        </div>
        <div className="absolute top-[123px] right-[567px] text-base text-gray-400 flex items-center justify-center w-[7px] h-[23.6px]">
          -
        </div>
        <div className="absolute top-[259px] right-[567px] text-base text-gray-400 flex items-center justify-center w-[7px] h-[23.6px]">
          -
        </div>
        <div className="absolute top-[123px] right-[488px] text-base text-gray-400 flex items-center justify-center w-[11px] h-[23.6px]">
          +
        </div>
        <div className="absolute top-[259px] right-[488px] text-base text-gray-400 flex items-center justify-center w-[11px] h-[23.6px]">
          +
        </div>
        <div className="absolute top-[96px] left-[120px] rounded-31xl bg-whitesmoke-400 w-[76px] h-[76px] max-w-[54px]" />
        <div className="absolute top-[232px] left-[120px] rounded-31xl bg-whitesmoke-400 w-[76px] h-[76px]" />
      </div>
      <b className="absolute top-[797px] right-[1461px] text-3xl flex items-center w-[149px] h-5">
        주문자 정보
      </b>
      <b className="absolute top-[797px] right-[791px] text-3xl flex items-center w-[149px] h-5">
        결제수단 선택
      </b>
      <div className="absolute top-[797px] right-[422px] text-base font-medium text-red flex items-center w-[380px] h-5">
        *결제 수단 선택 후 할인율이 적용된 가격이 총결제액입니다.
      </div>
      <img
        className="absolute top-[836.5px] left-[310px] w-[630px] h-px"
        alt=""
        src="/vector-9.svg"
      />
      <img
        className="absolute top-[836.5px] left-[980px] w-[630px] h-px"
        alt=""
        src="/vector-9.svg"
      />
      <div className="absolute top-[857px] left-[434px] rounded-8xs bg-gray-100 box-border w-[490px] h-[55px] border-[0.7px] border-solid border-gainsboro-100" />
      <div className="absolute top-[927px] left-[434px] rounded-8xs bg-gray-100 box-border w-[490px] h-[55px] border-[0.7px] border-solid border-gainsboro-100" />
      <div className="absolute top-[997px] left-[434px] rounded-8xs bg-gray-100 box-border w-[228px] h-[55px] border-[0.7px] border-solid border-gainsboro-100" />
      <div className="absolute top-[997px] left-[696px] rounded-8xs bg-gray-100 box-border w-[228px] h-[55px] border-[0.7px] border-solid border-gainsboro-100" />
      <div className="absolute top-[874px] right-[1428px] font-medium flex items-center w-[164px] h-5">
        이름
      </div>
      <div className="absolute top-[874px] right-[1301px] text-base font-medium text-dimgray-100 flex items-center w-[164px] h-5">
        홍길동
      </div>
      <div className="absolute top-[944px] right-[1301px] text-base font-medium text-dimgray-100 flex items-center w-[164px] h-5">
        010-1234-5678
      </div>
      <div className="absolute top-[1014px] right-[1301px] text-base font-medium text-dimgray-100 flex items-center w-[164px] h-5">
        abcd1234
      </div>
      <div className="absolute top-[1014px] right-[1041px] text-base font-medium text-dimgray-100 flex items-center w-[164px] h-5">
        naver.com
      </div>
      <div className="absolute top-[944px] right-[1428px] font-medium flex items-center w-[164px] h-5">
        연락처
      </div>
      <div className="absolute top-[1084px] right-[1533px] font-medium flex items-center w-[59px] h-5">
        주소
      </div>
      <div className="absolute top-[1014px] right-[1235px] font-medium text-dimgray-100 flex items-center w-3.5 h-5">
        @
      </div>
      <div className="absolute top-[1014px] right-[1428px] font-medium flex items-center w-[164px] h-5">
        이메일
      </div>
      <div className="absolute top-[1085px] right-[1092px] text-base font-light text-dimgray-100 flex items-center w-[374px] h-5">
        서울특별시 동대문구 00로 00길 000동 000호
      </div>
      <div className="absolute top-[937px] left-[1035px] rounded-8xs bg-whitesmoke-500 w-[520px] h-64" />
      <b className="absolute top-[1143px] right-[677px] text-3xl flex text-black items-center w-[178px] h-[17px]">
        총 결제액 :
      </b>
      <b className="absolute top-[1143px] right-[395px] text-3xl flex text-black text-right items-center w-[178px] h-[17px]">
        46,500원
      </b>
      <div className="absolute top-[980px] right-[747px] font-medium flex items-center w-[108px] h-5">{`상품합계급액 `}</div>
      <div className="absolute top-[1044px] right-[711px] font-medium flex items-center w-36 h-5">
        결제 옵션 할인가
      </div>
      <div className="absolute top-[980px] right-[395px] text-xl font-semibold text-right flex items-center w-[157px] h-5">
        50,000원
      </div>
      <div className="absolute top-[1044px] right-[395px] text-xl font-semibold text-right flex items-center w-[157px] h-5">
        3,500원원
      </div>
      <img
        className="absolute top-[1106.5px] left-[1060px] rounded-10xs w-[467px] h-px"
        alt=""
        src="/vector-22.svg"
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-gray-400 absolute top-[1213px] left-[1035px] rounded-8xs w-[520px] h-[70px]"
        onClick={onRectangleButtonClick}
      />
      <b className="absolute top-[1240px] right-[536px] text-xl flex text-white text-center items-center justify-center w-[178px] h-[17px]">
        결제하기
      </b>
      <div className="absolute top-[857px] right-[365px] w-[520px] h-[60px] text-center text-base">
        <div className="absolute top-[20px] right-[352px]">
          결제수단을 선택하세요
        </div>
        <div className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[520px] h-[60px] border-[1px] border-solid border-lightgray-100" />
        <img
          className="absolute top-[25px] left-[483px] rounded-10xs w-[15px] h-[7.6px]"
          alt=""
          src="/vector-3.svg"
        />
      </div>
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

export default Frame6;
