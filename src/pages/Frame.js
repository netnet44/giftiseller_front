const Frame = () => {
  return (
    <div className="relative w-full h-[205px] text-left text-lg text-gray-400 font-pretendard">
      <div className="absolute top-[0px] left-[0px] w-[590px] h-[205px]">
        <div className="absolute top-[0px] left-[0px] w-[590px] h-[205px]">
          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white box-border w-[590px] h-[205px] border-[1px] border-solid border-gainsboro-100" />
          <div className="absolute top-[66px] left-[31px]">신용카드</div>
          <div className="absolute top-[66px] left-[534px] text-red text-right">
            -7%
          </div>
          <div className="absolute top-[112px] left-[31px]">무통장입금</div>
          <div className="absolute top-[112px] left-[533px] text-red text-right">
            -5%
          </div>
          <div className="absolute top-[158px] left-[31px]">휴대폰결제</div>
          <div className="absolute top-[158px] left-[533px] text-red text-right">
            -0%
          </div>
          <div className="absolute top-[20px] left-[31px]">
            결제옵션을 선택하세요
          </div>
          <img
            className="absolute top-[25px] left-[552px] rounded-10xs w-[17px] h-[8.7px]"
            alt=""
            src="/vector-37.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Frame;
