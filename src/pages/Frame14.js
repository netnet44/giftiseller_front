import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Frame14 = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/gift-product-detail");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/gift-product-detail");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/gift-product-detail");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/gift-product-detail");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/gift-product-detail");
  }, [navigate]);

  const onRectangle7Click = useCallback(() => {
    navigate("/gift-product-detail");
  }, [navigate]);

  const onRectangle8Click = useCallback(() => {
    navigate("/gift-product-detail");
  }, [navigate]);

  const onRectangle9Click = useCallback(() => {
    navigate("/gift-product-detail");
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
    <div className="relative bg-white w-full h-[2127px] overflow-hidden text-left text-xl text-gray-400 font-pretendard">
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
      <div className="absolute top-[270px] left-[778px] text-17xl font-extrabold text-center flex items-center justify-center w-[364px] h-[39px]">
        상품카테고리/더보기
      </div>
      <div className="absolute top-[389px] left-[376px] rounded-501xl box-border h-10 overflow-hidden flex flex-row items-center justify-center py-0 px-8 text-base text-dimgray-100 border-[1px] border-solid border-gainsboro-100">
        <div className="relative font-medium">인기순</div>
      </div>
      <div className="absolute top-[389px] left-[260px] rounded-501xl box-border h-10 overflow-hidden flex flex-row items-center justify-center py-0 px-8 text-base text-dimgray-100 border-[1px] border-solid border-gainsboro-100">
        <div className="relative font-medium">할인순</div>
      </div>
      <div className="absolute top-[389px] left-[492px] rounded-501xl box-border h-10 overflow-hidden flex flex-row items-center justify-center py-0 px-8 text-base text-dimgray-100 border-[1px] border-solid border-gainsboro-100">
        <div className="relative font-medium">가격높은순</div>
      </div>
      <div className="absolute top-[389px] left-[636px] rounded-501xl box-border h-10 overflow-hidden flex flex-row items-center justify-center py-0 px-8 text-base text-dimgray-100 border-[1px] border-solid border-gainsboro-100">
        <div className="relative font-medium">가격낮은순</div>
      </div>
      <div
        className="absolute top-[479px] left-[970px] rounded-8xs bg-whitesmoke-500 box-border w-[335px] h-[354.9px] cursor-pointer border-[1px] border-solid border-gainsboro-100"
        onClick={onRectangle2Click}
      />
      <div
        className="absolute top-[1059px] left-[970px] rounded-8xs bg-whitesmoke-500 box-border w-[335px] h-[354.9px] cursor-pointer border-[1px] border-solid border-gainsboro-100"
        onClick={onRectangle3Click}
      />
      <div
        className="absolute top-[479px] left-[615px] rounded-8xs bg-whitesmoke-500 box-border w-[335px] h-[354.9px] cursor-pointer border-[1px] border-solid border-gainsboro-100"
        onClick={onRectangle4Click}
      />
      <div
        className="absolute top-[1059px] left-[615px] rounded-8xs bg-whitesmoke-500 box-border w-[335px] h-[354.9px] cursor-pointer border-[1px] border-solid border-gainsboro-100"
        onClick={onRectangle5Click}
      />
      <div
        className="absolute top-[479px] left-[1325px] rounded-8xs bg-whitesmoke-500 box-border w-[335px] h-[354.9px] cursor-pointer border-[1px] border-solid border-gainsboro-100"
        onClick={onRectangle6Click}
      />
      <div
        className="absolute top-[1059px] left-[1325px] rounded-8xs bg-whitesmoke-500 box-border w-[335px] h-[354.9px] cursor-pointer border-[1px] border-solid border-gainsboro-100"
        onClick={onRectangle7Click}
      />
      <div
        className="absolute top-[479px] left-[260px] rounded-8xs bg-whitesmoke-500 box-border w-[335px] h-[354.9px] cursor-pointer border-[1px] border-solid border-gainsboro-100"
        onClick={onRectangle8Click}
      />
      <div
        className="absolute top-[1059px] left-[260px] rounded-8xs bg-whitesmoke-500 box-border w-[335px] h-[354.9px] cursor-pointer border-[1px] border-solid border-gainsboro-100"
        onClick={onRectangle9Click}
      />
      <div className="absolute top-[847px] left-[260px] font-medium text-darkgray-100 flex items-center w-[175.9px]">
        카테고리
      </div>
      <div className="absolute top-[1427px] left-[260px] font-medium text-darkgray-100 flex items-center w-[175.9px]">
        카테고리
      </div>
      <div className="absolute top-[847px] left-[615px] font-medium text-darkgray-100 flex items-center w-[175.9px]">
        카테고리
      </div>
      <div className="absolute top-[1427px] left-[615px] font-medium text-darkgray-100 flex items-center w-[175.9px]">
        카테고리
      </div>
      <div className="absolute top-[847px] left-[970px] font-medium text-darkgray-100 flex items-center w-[175.9px]">
        카테고리
      </div>
      <div className="absolute top-[1427px] left-[970px] font-medium text-darkgray-100 flex items-center w-[175.9px]">
        카테고리
      </div>
      <div className="absolute top-[847px] left-[1325px] font-medium text-darkgray-100 flex items-center w-[175.9px]">
        카테고리
      </div>
      <div className="absolute top-[1427px] left-[1325px] font-medium text-darkgray-100 flex items-center w-[175.9px]">
        카테고리
      </div>
      <div className="absolute top-[479px] left-[261px] rounded-tl-8xs rounded-tr-none rounded-b-none bg-darkturquoise-100 w-20 h-12" />
      <div className="absolute top-[1059px] left-[261px] rounded-tl-8xs rounded-tr-none rounded-b-none bg-darkturquoise-100 w-20 h-12" />
      <div className="absolute top-[479px] left-[615px] rounded-tl-8xs rounded-tr-none rounded-b-none bg-darkturquoise-100 w-20 h-12" />
      <div className="absolute top-[1059px] left-[615px] rounded-tl-8xs rounded-tr-none rounded-b-none bg-darkturquoise-100 w-20 h-12" />
      <div className="absolute top-[479px] left-[970px] rounded-tl-8xs rounded-tr-none rounded-b-none bg-darkturquoise-100 w-20 h-12" />
      <div className="absolute top-[1059px] left-[970px] rounded-tl-8xs rounded-tr-none rounded-b-none bg-darkturquoise-100 w-20 h-12" />
      <div className="absolute top-[479px] left-[1325px] rounded-tl-8xs rounded-tr-none rounded-b-none bg-darkturquoise-100 w-20 h-12" />
      <div className="absolute top-[1059px] left-[1325px] rounded-tl-8xs rounded-tr-none rounded-b-none bg-darkturquoise-100 w-20 h-12" />
      <div className="absolute top-[479.1px] left-[261px] font-semibold text-white text-center flex items-center justify-center w-20 h-12">
        D-1
      </div>
      <div className="absolute top-[1059.1px] left-[261px] font-semibold text-white text-center flex items-center justify-center w-20 h-12">
        D-1
      </div>
      <div className="absolute top-[479.1px] left-[615px] font-semibold text-white text-center flex items-center justify-center w-20 h-12">
        D-1
      </div>
      <div className="absolute top-[1059.1px] left-[615px] font-semibold text-white text-center flex items-center justify-center w-20 h-12">
        D-1
      </div>
      <div className="absolute top-[479.1px] left-[970px] font-semibold text-white text-center flex items-center justify-center w-20 h-12">
        D-2
      </div>
      <div className="absolute top-[1059.1px] left-[970px] font-semibold text-white text-center flex items-center justify-center w-20 h-12">
        D-2
      </div>
      <div className="absolute top-[479.1px] left-[1325px] font-semibold text-white text-center flex items-center justify-center w-20 h-12">
        D-3
      </div>
      <div className="absolute top-[1059.1px] left-[1325px] font-semibold text-white text-center flex items-center justify-center w-20 h-12">
        D-3
      </div>
      <div className="absolute top-[750px] left-[382px] rounded-8xs bg-white w-48 h-16" />
      <div className="absolute top-[1330px] left-[382px] rounded-8xs bg-white w-48 h-16" />
      <div className="absolute top-[750px] left-[1092px] rounded-8xs bg-white w-48 h-16" />
      <div className="absolute top-[1330px] left-[1092px] rounded-8xs bg-white w-48 h-16" />
      <div className="absolute top-[750px] left-[737px] rounded-8xs bg-white w-48 h-16" />
      <div className="absolute top-[1330px] left-[737px] rounded-8xs bg-white w-48 h-16" />
      <div className="absolute top-[750px] left-[1447px] rounded-8xs bg-white w-48 h-16" />
      <div className="absolute top-[1330px] left-[1447px] rounded-8xs bg-white w-48 h-16" />
      <div className="absolute top-[884px] left-[260px] font-medium inline-block w-[335px] h-[49px]">
        상품명을 입력하세요
      </div>
      <div className="absolute top-[1464px] left-[260px] font-medium inline-block w-[335px] h-[49px]">
        상품명을 입력하세요
      </div>
      <div className="absolute top-[884px] left-[615px] font-medium inline-block w-[335px] h-[49px]">
        상품명을 입력하세요
      </div>
      <div className="absolute top-[1464px] left-[615px] font-medium inline-block w-[335px] h-[49px]">
        상품명을 입력하세요
      </div>
      <div className="absolute top-[884px] left-[970px] font-medium inline-block w-[335px] h-[49px]">
        상품명을 입력하세요
      </div>
      <div className="absolute top-[1464px] left-[970px] font-medium inline-block w-[335px] h-[49px]">
        상품명을 입력하세요
      </div>
      <div className="absolute top-[884px] left-[1325px] font-medium inline-block w-[335px] h-[49px]">
        상품명을 입력하세요
      </div>
      <div className="absolute top-[1464px] left-[1325px] font-medium inline-block w-[335px] h-[49px]">
        상품명을 입력하세요
      </div>
      <div className="absolute top-[985px] left-[260px] font-medium text-gray-300">
        9,000원
      </div>
      <div className="absolute top-[1565px] left-[260px] font-medium text-gray-300">
        9,000원
      </div>
      <div className="absolute top-[985px] left-[615px] font-medium text-gray-300">
        9,000원
      </div>
      <div className="absolute top-[1565px] left-[615px] font-medium text-gray-300">
        9,000원
      </div>
      <div className="absolute top-[985px] left-[970px] font-medium text-gray-300">
        9,000원
      </div>
      <div className="absolute top-[1565px] left-[970px] font-medium text-gray-300">
        9,000원
      </div>
      <div className="absolute top-[985px] left-[1325px] font-medium text-gray-300">
        9,000원
      </div>
      <div className="absolute top-[1565px] left-[1325px] font-medium text-gray-300">
        9,000원
      </div>
      <div className="absolute top-[963px] left-[260px] w-[59px] h-[17px] text-sm text-darkgray-100">
        <div className="absolute top-[0px] left-[2px] font-medium">
          10,000원
        </div>
        <img
          className="absolute top-[7.5px] left-[0px] w-[59px] h-px"
          alt=""
          src="/vector-29.svg"
        />
      </div>
      <div className="absolute top-[1543px] left-[260px] w-[59px] h-[17px] text-sm text-darkgray-100">
        <div className="absolute top-[0px] left-[2px] font-medium">
          10,000원
        </div>
        <img
          className="absolute top-[7.5px] left-[0px] w-[59px] h-px"
          alt=""
          src="/vector-29.svg"
        />
      </div>
      <div className="absolute top-[963px] left-[615px] w-[59px] h-[17px] text-sm text-darkgray-100">
        <div className="absolute top-[0px] left-[2px] font-medium">
          10,000원
        </div>
        <img
          className="absolute top-[7.5px] left-[0px] w-[59px] h-px"
          alt=""
          src="/vector-29.svg"
        />
      </div>
      <div className="absolute top-[1543px] left-[615px] w-[59px] h-[17px] text-sm text-darkgray-100">
        <div className="absolute top-[0px] left-[2px] font-medium">
          10,000원
        </div>
        <img
          className="absolute top-[7.5px] left-[0px] w-[59px] h-px"
          alt=""
          src="/vector-29.svg"
        />
      </div>
      <div className="absolute top-[963px] left-[970px] w-[59px] h-[17px] text-sm text-darkgray-100">
        <div className="absolute top-[0px] left-[2px] font-medium">
          10,000원
        </div>
        <img
          className="absolute top-[7.5px] left-[0px] w-[59px] h-px"
          alt=""
          src="/vector-29.svg"
        />
      </div>
      <div className="absolute top-[1543px] left-[970px] w-[59px] h-[17px] text-sm text-darkgray-100">
        <div className="absolute top-[0px] left-[2px] font-medium">
          10,000원
        </div>
        <img
          className="absolute top-[7.5px] left-[0px] w-[59px] h-px"
          alt=""
          src="/vector-29.svg"
        />
      </div>
      <div className="absolute top-[963px] left-[1325px] w-[59px] h-[17px] text-sm text-darkgray-100">
        <div className="absolute top-[0px] left-[2px] font-medium">
          10,000원
        </div>
        <img
          className="absolute top-[7.5px] left-[0px] w-[59px] h-px"
          alt=""
          src="/vector-29.svg"
        />
      </div>
      <div className="absolute top-[1543px] left-[1325px] w-[59px] h-[17px] text-sm text-darkgray-100">
        <div className="absolute top-[0px] left-[2px] font-medium">
          10,000원
        </div>
        <img
          className="absolute top-[7.5px] left-[0px] w-[59px] h-px"
          alt=""
          src="/vector-29.svg"
        />
      </div>
      <div className="absolute top-[764px] left-[392px] flex flex-row items-start justify-start gap-[19px] text-center text-xs">
        <div className="relative w-11 h-[35px]">
          <b className="absolute top-[0px] left-[6px] flex items-center justify-center w-8 h-[13.3px]">
            무통장
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-dodgerblue items-center justify-center w-11 h-[16.2px]">
            ~7%↓
          </b>
        </div>
        <div className="relative w-[45px] h-[35px]">
          <b className="absolute top-[0px] left-[12px] flex items-center justify-center w-[21px] h-[13.3px]">
            카드
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-deepskyblue items-center justify-center w-[45px] h-[16.2px]">
            ~3%↓
          </b>
        </div>
        <div className="relative w-[45px] h-[35px]">
          <b className="absolute top-[0px] left-[7px] flex items-center justify-center w-8 h-[13.3px]">
            휴대폰
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-darkslateblue items-center justify-center w-[45px] h-[16.2px]">
            ~0%↓
          </b>
        </div>
      </div>
      <div className="absolute top-[1344px] left-[392px] flex flex-row items-start justify-start gap-[19px] text-center text-xs">
        <div className="relative w-11 h-[35px]">
          <b className="absolute top-[0px] left-[6px] flex items-center justify-center w-8 h-[13.3px]">
            무통장
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-dodgerblue items-center justify-center w-11 h-[16.2px]">
            ~7%↓
          </b>
        </div>
        <div className="relative w-[45px] h-[35px]">
          <b className="absolute top-[0px] left-[12px] flex items-center justify-center w-[21px] h-[13.3px]">
            카드
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-deepskyblue items-center justify-center w-[45px] h-[16.2px]">
            ~3%↓
          </b>
        </div>
        <div className="relative w-[45px] h-[35px]">
          <b className="absolute top-[0px] left-[7px] flex items-center justify-center w-8 h-[13.3px]">
            휴대폰
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-darkslateblue items-center justify-center w-[45px] h-[16.2px]">
            ~0%↓
          </b>
        </div>
      </div>
      <div className="absolute top-[764px] left-[1102px] flex flex-row items-start justify-start gap-[19px] text-center text-xs">
        <div className="relative w-11 h-[35px]">
          <b className="absolute top-[0px] left-[6px] flex items-center justify-center w-8 h-[13.3px]">
            무통장
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-dodgerblue items-center justify-center w-11 h-[16.2px]">
            ~7%↓
          </b>
        </div>
        <div className="relative w-[45px] h-[35px]">
          <b className="absolute top-[0px] left-[12px] flex items-center justify-center w-[21px] h-[13.3px]">
            카드
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-deepskyblue items-center justify-center w-[45px] h-[16.2px]">
            ~3%↓
          </b>
        </div>
        <div className="relative w-[45px] h-[35px]">
          <b className="absolute top-[0px] left-[7px] flex items-center justify-center w-8 h-[13.3px]">
            휴대폰
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-darkslateblue items-center justify-center w-[45px] h-[16.2px]">
            ~0%↓
          </b>
        </div>
      </div>
      <div className="absolute top-[1344px] left-[1102px] flex flex-row items-start justify-start gap-[19px] text-center text-xs">
        <div className="relative w-11 h-[35px]">
          <b className="absolute top-[0px] left-[6px] flex items-center justify-center w-8 h-[13.3px]">
            무통장
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-dodgerblue items-center justify-center w-11 h-[16.2px]">
            ~7%↓
          </b>
        </div>
        <div className="relative w-[45px] h-[35px]">
          <b className="absolute top-[0px] left-[12px] flex items-center justify-center w-[21px] h-[13.3px]">
            카드
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-deepskyblue items-center justify-center w-[45px] h-[16.2px]">
            ~3%↓
          </b>
        </div>
        <div className="relative w-[45px] h-[35px]">
          <b className="absolute top-[0px] left-[7px] flex items-center justify-center w-8 h-[13.3px]">
            휴대폰
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-darkslateblue items-center justify-center w-[45px] h-[16.2px]">
            ~0%↓
          </b>
        </div>
      </div>
      <div className="absolute top-[764px] left-[747px] flex flex-row items-start justify-start gap-[19px] text-center text-xs">
        <div className="relative w-11 h-[35px]">
          <b className="absolute top-[0px] left-[6px] flex items-center justify-center w-8 h-[13.3px]">
            무통장
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-dodgerblue items-center justify-center w-11 h-[16.2px]">
            ~7%↓
          </b>
        </div>
        <div className="relative w-[45px] h-[35px]">
          <b className="absolute top-[0px] left-[12px] flex items-center justify-center w-[21px] h-[13.3px]">
            카드
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-deepskyblue items-center justify-center w-[45px] h-[16.2px]">
            ~3%↓
          </b>
        </div>
        <div className="relative w-[45px] h-[35px]">
          <b className="absolute top-[0px] left-[7px] flex items-center justify-center w-8 h-[13.3px]">
            휴대폰
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-darkslateblue items-center justify-center w-[45px] h-[16.2px]">
            ~0%↓
          </b>
        </div>
      </div>
      <div className="absolute top-[1344px] left-[747px] flex flex-row items-start justify-start gap-[19px] text-center text-xs">
        <div className="relative w-11 h-[35px]">
          <b className="absolute top-[0px] left-[6px] flex items-center justify-center w-8 h-[13.3px]">
            무통장
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-dodgerblue items-center justify-center w-11 h-[16.2px]">
            ~7%↓
          </b>
        </div>
        <div className="relative w-[45px] h-[35px]">
          <b className="absolute top-[0px] left-[12px] flex items-center justify-center w-[21px] h-[13.3px]">
            카드
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-deepskyblue items-center justify-center w-[45px] h-[16.2px]">
            ~3%↓
          </b>
        </div>
        <div className="relative w-[45px] h-[35px]">
          <b className="absolute top-[0px] left-[7px] flex items-center justify-center w-8 h-[13.3px]">
            휴대폰
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-darkslateblue items-center justify-center w-[45px] h-[16.2px]">
            ~0%↓
          </b>
        </div>
      </div>
      <div className="absolute top-[764px] left-[1457px] flex flex-row items-start justify-start gap-[19px] text-center text-xs">
        <div className="relative w-11 h-[35px]">
          <b className="absolute top-[0px] left-[6px] flex items-center justify-center w-8 h-[13.3px]">
            무통장
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-dodgerblue items-center justify-center w-11 h-[16.2px]">
            ~7%↓
          </b>
        </div>
        <div className="relative w-[45px] h-[35px]">
          <b className="absolute top-[0px] left-[12px] flex items-center justify-center w-[21px] h-[13.3px]">
            카드
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-deepskyblue items-center justify-center w-[45px] h-[16.2px]">
            ~3%↓
          </b>
        </div>
        <div className="relative w-[45px] h-[35px]">
          <b className="absolute top-[0px] left-[7px] flex items-center justify-center w-8 h-[13.3px]">
            휴대폰
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-darkslateblue items-center justify-center w-[45px] h-[16.2px]">
            ~0%↓
          </b>
        </div>
      </div>
      <div className="absolute top-[1344px] left-[1457px] flex flex-row items-start justify-start gap-[19px] text-center text-xs">
        <div className="relative w-11 h-[35px]">
          <b className="absolute top-[0px] left-[6px] flex items-center justify-center w-8 h-[13.3px]">
            무통장
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-dodgerblue items-center justify-center w-11 h-[16.2px]">
            ~7%↓
          </b>
        </div>
        <div className="relative w-[45px] h-[35px]">
          <b className="absolute top-[0px] left-[12px] flex items-center justify-center w-[21px] h-[13.3px]">
            카드
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-deepskyblue items-center justify-center w-[45px] h-[16.2px]">
            ~3%↓
          </b>
        </div>
        <div className="relative w-[45px] h-[35px]">
          <b className="absolute top-[0px] left-[7px] flex items-center justify-center w-8 h-[13.3px]">
            휴대폰
          </b>
          <b className="absolute top-[18.8px] left-[0px] text-sm flex text-darkslateblue items-center justify-center w-[45px] h-[16.2px]">
            ~0%↓
          </b>
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

export default Frame14;
