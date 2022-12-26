import { AppBar } from "@mui/material";
import { Waypoint } from "react-waypoint";

export default function Test() {
  const menu = [
    {
        title:'home'
    },
    {
      title:'profile'
    },
    {
      title:'contact-us'
    }
  ]
 

 

  return (
    <div
      className="parent-test"
      style={{
        width: "28%",
        margin: "0 auto",
      }}
    >
      <AppBar
      style={{
        display:"flex",
      marginBottom:'1rem',
      flexDirection:'row'
      }}
      >
       
        {
            menu.map((item,index)=>{
              return(
                <h3 className="m-3 " key={index}>
                  {/* <a href={`#${item.title}`}>{item.title}</a> */}
                  <a 
                  href={`#${item.title}`}
                  >{item.title}
                  </a>
                </h3>
              )
            })
          }
       
      </AppBar>
     <main>
      {
        menu.map((item,index)=>{
            return(
              <div 
              style={{
              marginTop:'4rem'
              }}
              
              key={index}>
                <Waypoint 
                onEnter={()=>console.log('hi')}
                />
                <h1 id={item.title}>{item.title}</h1>

                <p style={{lineHeight:'40px'}}>
                  
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dui quam, efficitur nec quam imperdiet, tempor volutpat augue. Integer sollicitudin finibus ipsum, id lacinia odio posuere vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam dapibus faucibus nulla eu sodales. Praesent sed gravida magna. Sed luctus sapien a risus consectetur ullamcorper eu at magna. Donec non porta mauris.

Fusce scelerisque tincidunt magna. Mauris posuere diam ex, ac dictum elit euismod sit amet. Phasellus ac dignissim velit. Nulla facilisi. Etiam rhoncus nisi dui, vel vehicula augue varius et. Fusce id elementum diam, vel volutpat dui. Aliquam id ultricies ipsum. Nulla non turpis id quam vehicula malesuada. Aliquam erat volutpat. Vestibulum bibendum viverra lacus in lobortis. Cras id turpis metus. Aenean sapien odio, laoreet quis interdum sit amet, faucibus sit amet dui.

Donec metus tellus, accumsan quis sodales quis, mollis et dolor. Quisque eget aliquam leo. Donec placerat lacinia erat, eget eleifend neque tincidunt nec. Sed nec orci iaculis, ultricies dolor ut, rutrum lectus. Cras consequat consequat lectus, vel maximus urna rhoncus vitae. Aenean at neque dictum, ornare quam fringilla, pellentesque metus. Pellentesque lacinia tellus ante, in ultricies quam ultricies vel.

In vitae faucibus lorem. Etiam fringilla posuere augue eu vestibulum. Suspendisse porttitor imperdiet bibendum. Pellentesque in nibh pretium, dignissim nisi vel, placerat erat. Praesent nec erat porttitor, varius enim vitae, ultricies quam. Sed mollis enim fringilla urna malesuada, non convallis ipsum vulputate. Cras imperdiet pellentesque lorem, vitae vehicula erat sodales sed. Sed in tristique lectus. Integer porttitor lectus metus, sit amet luctus mi placerat consectetur. Pellentesque quis odio pretium, dignissim tortor vitae, hendrerit est. Fusce bibendum dictum lorem, id gravida ante sagittis at. Fusce efficitur elit lectus, et bibendum tellus scelerisque ut. Cras eleifend dui sit amet purus consectetur, nec viverra enim porttitor. Sed dapibus in enim quis auctor. Praesent rhoncus quam in dui interdum, ac hendrerit felis sodales.

Vestibulum a ligula augue. Mauris sit amet ultricies felis. Nam molestie tellus ante. Nulla id nunc ac sem pharetra pulvinar ac at orci. Pellentesque sit amet ipsum posuere, fringilla ipsum eu, aliquet ipsum. Maecenas gravida in elit at ultricies. Nulla varius magna vel ultricies finibus. Donec eu erat a nulla egestas ultrices sit amet a eros. Maecenas laoreet imperdiet luctus. Cras mauris quam, tempor nec accumsan a, ultrices varius sem. Nam id vehicula elit, eget efficitur ligula. Etiam dignissim diam felis, at accumsan turpis volutpat a.
                </p>
              </div>
            )
        })
      }
     </main>
    </div>
  );
}

