import { useImmer } from "use-immer";



const ReadMoreText = ({children}) => {
    const [isReadMoreShown,setIsReadMoreShown] = useImmer(false)
    console.log(typeof children)
    if(typeof children ==="string"){
  return (
    <>
    <div>
      {isReadMoreShown ? children : children.substr(0,200).concat(" ...")}
    </div>
    <button onClick={()=>{
setIsReadMoreShown(draft=>{
   return !draft
})
console.log("hi")
    }}>{!isReadMoreShown? "بیشتر":"کمتر"}</button>
    </>
  );
    }
    return null
};

export default function Test2() {
  const text = [
    "از مزایای همزن‌های کاسه‌ایی، بهبود کیفیت مواد آماده شده و همزده و جلوگیری از کثیف شدن و پاشیدن مواد موجود در کاسه در محیط آشپزخانه است. همزن کاسه‌دار برگامو مدل BG-SM3560SB، همزنی قوی با توان 1600 وات و 6 سرعت تنظیم متفاوت است که متناسب با نوع مواد و نیاز شما تغیر می‌کند. این مدل دارای عملکرد پالس و پایه ضد لغزش است. همزن کاسه دار برگامو مدل BG-SM3560SB، کاسه‌ایی از جنس استیل ضد زنگ دارد که حجم آن 8 لیتر است. این همزن دارای نمایشگر LED بر روی بدنه خود و همچنین دارای سیستم ضدچکه است. این همزن سه عدد پره از جنس استیل ضد زنگ دارد که پره خمیر برای ورز دادن خمیر، ترکیب کردن مواد مانند مخلوط کیک، خمیر کوکی و مایعات و هوادهی موادی مانند خامه و سفیده تخم مرغ است. با داشتن همزن دارای پره مخصوص خمیر زنی، تهیه نان، دسر، کیک و شیرینی و … بسیار آسان‌تر و لذت‌بخش‌تر خواهد شد."
  ];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <h2>
        <ReadMoreText>
            {text[0]}
        </ReadMoreText>
      </h2>
    </div>
  );
}
