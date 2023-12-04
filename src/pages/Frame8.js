import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Frame8 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/mypage-edti");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/");
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
    <div className="relative bg-white w-full h-[2100px] overflow-hidden text-left text-lg text-gray-400 font-pretendard">
      <div className="absolute top-[1374px] left-[471px] rounded-8xs bg-gray-100 box-border w-[488px] h-[55px] border-[0.7px] border-solid border-gainsboro-100" />
      <div className="absolute top-[1444px] left-[471px] rounded-8xs bg-gray-100 box-border w-[488px] h-[55px] border-[0.7px] border-solid border-gainsboro-100" />
      <div className="absolute top-[1584px] left-[471px] rounded-8xs bg-gray-100 box-border w-[488px] h-[55px] border-[0.7px] border-solid border-gainsboro-100" />
      <div className="absolute top-[1514px] left-[471px] rounded-8xs bg-gray-100 box-border w-[227px] h-[55px] border-[0.7px] border-solid border-gainsboro-100" />
      <div className="absolute top-[1514px] left-[732px] rounded-8xs bg-gray-100 box-border w-[227px] h-[55px] border-[0.7px] border-solid border-gainsboro-100" />
      <div className="absolute top-[413px] left-[311px] bg-darkturquoise-400 w-[1300px] h-[55px] opacity-[0.1]" />
      <div className="absolute top-[481px] left-[311px] rounded-8xs box-border w-[1300px] h-[267px] border-[1px] border-solid border-gainsboro-100" />
      <div className="absolute top-[849px] left-[311px] rounded-8xs box-border w-[1300px] h-[164px] border-[1px] border-solid border-gainsboro-100" />
      <b className="absolute top-[373px] right-[1429px] text-3xl flex items-center w-[182px] h-5">
        주문내역 조회하기
      </b>
      <b className="absolute top-[1314px] right-[1462px] text-3xl flex items-center w-[149px] h-5">
        회원정보
      </b>
      <b className="absolute top-[789px] right-[1462px] text-3xl flex items-center w-[149px] h-5">
        주문처리 현황
      </b>
      <b className="absolute top-[1073px] right-[1462px] text-3xl flex items-center w-[149px] h-5">
        적립금
      </b>
      <div className="absolute top-[599px] right-[869px] font-medium text-center flex items-center justify-center w-[164px] h-5">
        주문내역이 없습니다
      </div>
      <div className="absolute top-[1391px] right-[1391px] font-medium flex items-center w-[164px] h-5">
        아이디
      </div>
      <div className="absolute top-[1391px] right-[1264px] text-base font-medium text-dimgray-100 flex items-center w-[164px] h-5">
        abcd1234
      </div>
      <div className="absolute top-[1461px] right-[1264px] text-base font-medium text-dimgray-100 flex items-center w-[164px] h-5">
        010-1234-5678
      </div>
      <div className="absolute top-[1601px] right-[1186px] text-base font-medium text-dimgray-100 flex items-center w-[242px] h-5">
        서울시 00구 00동 00-00
      </div>
      <div className="absolute top-[1531px] right-[1264px] text-base font-medium text-dimgray-100 flex items-center w-[164px] h-5">
        abcd1234
      </div>
      <div className="absolute top-[1531px] right-[1004px] text-base font-medium text-dimgray-100 flex items-center w-[164px] h-5">
        naver.com
      </div>
      <div className="absolute top-[1150px] right-[1391px] font-medium flex items-center w-[164px] h-5">
        현재 적립된 적립금
      </div>
      <div className="absolute top-[1150px] right-[1102px] font-medium flex items-center w-[17px] h-5">
        원
      </div>
      <div className="absolute top-[1133px] right-[1167px] font-medium text-right flex items-center w-[164px] h-[55px]">
        1,000
      </div>
      <div className="absolute top-[1461px] right-[1391px] font-medium flex items-center w-[164px] h-5">
        연락처
      </div>
      <div className="absolute top-[1601px] right-[1496px] font-medium flex items-center w-[59px] h-5">
        주소
      </div>
      <div className="absolute top-[1572px] right-[309px] text-smi font-light text-dimgray-100 text-right flex items-center w-[246px] h-5">
        탈퇴를 원하신다면, 탈퇴 버튼을 눌러주세요
      </div>
      <div className="absolute top-[270px] left-[calc(50%_-_215px)] text-17xl font-extrabold text-center flex items-center justify-center w-[444px] h-[39px]">
        마이페이지
      </div>
      <div className="absolute top-[432px] right-[1353px] text-mini text-black text-center flex items-center justify-center w-[137px] h-[17px]">
        주문번호
      </div>
      <div className="absolute top-[432px] right-[1062px] text-mini text-black text-center flex items-center justify-center w-[137px] h-[17px]">
        주문일시
      </div>
      <div className="absolute top-[432px] right-[876px] text-mini text-black text-center flex items-center justify-center w-[137px] h-[17px]">
        상품수
      </div>
      <div className="absolute top-[432px] right-[668px] text-mini text-black text-center flex items-center justify-center w-[137px] h-[17px]">
        주문금액
      </div>
      <div className="absolute top-[432px] right-[461px] text-mini text-black text-center flex items-center justify-center w-[138px] h-[17px]">
        결제상태
      </div>
      <div className="absolute top-[432px] right-[309px] text-mini text-black text-center flex items-center justify-center w-[137px] h-[17px]">
        주문상태
      </div>
      <img
        className="absolute top-[1353.5px] left-[311px] w-[1300px] h-px"
        alt=""
        src="/vector-6.svg"
      />
      <img
        className="absolute top-[828.5px] left-[311px] w-[1300px] h-px"
        alt=""
        src="/vector-6.svg"
      />
      <img
        className="absolute top-[1112.5px] left-[311px] w-[1300px] h-px"
        alt=""
        src="/vector-6.svg"
      />
      <div
        className="absolute top-[1294px] left-[1522px] rounded-8xs bg-darkturquoise-500 h-10 overflow-hidden flex flex-row items-center justify-center py-1.5 px-[13px] box-border cursor-pointer text-center text-darkturquoise-100"
        onClick={onFrameContainerClick}
      >
        <div className="relative leading-[82px] font-semibold">정보수정</div>
      </div>
      <div
        className="absolute top-[1294px] left-[1417px] rounded-8xs box-border h-10 overflow-hidden flex flex-row items-center justify-center py-1.5 px-[13px] cursor-pointer text-center text-dimgray-100 border-[1px] border-solid border-dimgray-400"
        onClick={onFrameContainer1Click}
      >
        <div className="relative leading-[82px]">로그아웃</div>
      </div>
      <div className="absolute top-[1599px] left-[1522px] rounded-8xs box-border h-10 overflow-hidden flex flex-row items-center justify-center py-1.5 px-[13px] text-center text-dimgray-100 border-[1px] border-solid border-dimgray-400">
        <div className="relative leading-[82px]">회원탈퇴</div>
      </div>
      <div className="absolute top-[1531px] right-[1198px] font-medium text-dimgray-100 flex items-center w-3.5 h-5">
        @
      </div>
      <div className="absolute top-[1531px] right-[1391px] font-medium flex items-center w-[164px] h-5">
        이메일
      </div>
      <div className="absolute top-[1133px] left-[549px] rounded-8xs box-border w-[225px] h-[55px] border-[0.7px] border-solid border-silver-100" />
      <div className="absolute top-[910px] left-[414px] flex flex-row items-start justify-start gap-[90px] text-center text-13xl">
        <div className="relative w-[138px] h-[70px] text-lg">
          <div className="absolute top-[0px] left-[0px] font-medium flex items-center justify-center w-[138px] h-[17px]">
            입금전
          </div>
          <div className="absolute top-[53px] left-[0px] text-13xl font-semibold flex items-center justify-center w-[138px] h-[17px]">
            1
          </div>
        </div>
        <img className="relative w-px h-[88px]" alt="" src="/vector-13.svg" />
        <div className="relative w-[138px] h-[68px] text-darkturquoise-100">
          <div className="absolute top-[51px] left-[0px] font-semibold flex items-center justify-center w-[138px] h-[17px]">
            3
          </div>
          <div className="absolute top-[0px] left-[0px] text-lg font-medium text-gray-400 flex items-center justify-center w-[138px] h-[17px]">
            입금완료
          </div>
        </div>
        <img className="relative w-px h-[88px]" alt="" src="/vector-13.svg" />
        <div className="relative w-[139px] h-[68px]">
          <div className="absolute top-[51px] left-[0px] font-semibold flex items-center justify-center w-[138px] h-[17px]">
            0
          </div>
          <div className="absolute top-[0px] left-[1px] text-lg font-medium flex items-center justify-center w-[138px] h-[17px]">
            배송중
          </div>
        </div>
        <img className="relative w-px h-[88px]" alt="" src="/vector-13.svg" />
        <div className="relative w-[139px] h-[68px]">
          <div className="absolute top-[51px] left-[0px] font-semibold flex items-center justify-center w-[138px] h-[17px]">
            0
          </div>
          <div className="absolute top-[0px] left-[1px] text-lg font-medium flex items-center justify-center w-[138px] h-[17px]">
            배송완료
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0px] left-[0px] w-[1920px] h-[406px] text-smi text-dimgray-300 font-noto-sans-kr">
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

export default Frame8;
