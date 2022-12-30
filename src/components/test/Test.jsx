import ReactImageZoom from "react-image-zoom";
import {
  MagnifierZoom,
  MagnifierContainer,
  SideBySideMagnifier,
} from "react-image-magnifiers";
import { useEffect, useRef } from "react";

export default function Test() {
  const start = useRef(null);

  const end = useRef(null);

  useEffect(() => {
    var element = document.getElementById("start");
    window.addEventListener("scroll", (e) => {
      console.log(element);
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      className="app"
      id="start"
    >
      <div ref={start} style={{ maxWidth: "200px" }} className="start">
        <h1 style={{ borderBottom: "1px solid red" }}>start</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed risus
        nec risus sagittis facilisis non et tortor. Mauris tincidunt libero
        odio, finibus mollis orci consequat sit amet. Nullam vehicula odio ac
        odio ultrices ullamcorper. Aliquam et euismod ex, eu semper nulla.
        Aliquam finibus orci id justo rhoncus malesuada. Sed ultrices luctus
        nulla et rutrum. Donec iaculis libero non ante consequat, in condimentum
        lectus lobortis. Morbi maximus quis massa at sollicitudin. Nunc mollis
        eu magna ut dictum. Sed commodo sem in laoreet efficitur. Pellentesque a
        eros tristique, lobortis magna id, mollis lacus. Sed finibus nisi nec
        commodo lobortis. Vestibulum porta ante in leo pharetra, sit amet
        condimentum nibh accumsan. Mauris ut venenatis felis, et efficitur ante.
        Vivamus quis eros congue, tristique leo at, tincidunt ante. Nullam
        cursus, libero imperdiet euismod tempor, nunc velit auctor justo, sit
        amet egestas ex tellus sit amet tortor. Donec egestas, nibh quis maximus
        faucibus, dui nibh feugiat nisi, vel viverra quam turpis at magna.
        Aenean a tempus velit, nec convallis eros. Vestibulum cursus fermentum
        erat, a semper leo accumsan non. Fusce at purus nisi. Nulla cursus
        turpis quis mi accumsan imperdiet. Morbi et pellentesque felis. Donec ac
        rutrum massa. Curabitur vitae risus et tellus luctus rhoncus sit amet
        nec dui. Donec egestas aliquam feugiat. Suspendisse tincidunt tristique
        lorem elementum finibus. Aenean facilisis orci id aliquet congue. Proin
        quis convallis magna, ac lacinia risus. Maecenas blandit, enim a
        fermentum pellentesque, quam augue tristique magna, sit amet scelerisque
        dui sem ac diam. Etiam accumsan arcu et augue ullamcorper, non faucibus
        dolor accumsan. Vivamus mattis ac felis interdum convallis. Curabitur
        blandit eu felis at finibus. Duis at molestie leo, sed ornare velit.
        Nunc a est tincidunt, elementum elit quis, auctor eros. Donec mollis leo
        at ante pharetra iaculis. Donec id dolor est. Etiam ac purus velit.
        Aliquam non mattis turpis. Quisque iaculis lobortis finibus. Nullam
        metus nibh, vulputate at tellus ac, varius pellentesque diam. Integer
        vitae vestibulum enim. Fusce molestie orci ornare arcu eleifend auctor
        sit amet id lectus. Aliquam odio orci, eleifend tincidunt molestie at,
        mattis ut diam. Suspendisse malesuada mauris sem, et luctus libero
        lobortis at. Pellentesque vitae dapibus justo. Suspendisse ut lacus vel
        odio consectetur fermentum ut dictum velit. Nullam euismod dui gravida,
        semper nibh sit amet, vestibulum est. Vestibulum ultrices convallis
        justo vitae finibus. Maecenas est justo, viverra at quam sit amet,
        lobortis porta justo. Mauris ut sagittis sapien. Nulla sem lorem,
        laoreet ut consectetur at, molestie commodo sem. Duis ligula erat,
        porttitor eu suscipit eget, consectetur nec ligula. Integer mollis elit
        et rhoncus pretium. Morbi a commodo ex. Ut nec urna id ipsum feugiat
        gravida. Fusce commodo felis nec tempor sodales. Pellentesque sed
        eleifend tortor. Duis luctus condimentum augue, id accumsan lorem
        convallis ut. Curabitur in dictum nibh. Integer lobortis laoreet diam,
        in facilisis urna scelerisque ut. Aenean viverra erat velit, eu
        facilisis sapien consectetur id. Ut a fermentum neque, a posuere urna.
        Nulla mollis turpis tortor, eu sodales enim fermentum et. Morbi quis
        nisl et tortor luctus gravida et a lacus. Nullam eget finibus justo.
        Curabitur egestas neque vitae quam ultrices pharetra. Nulla facilisi.
        Morbi ut eleifend sapien. Curabitur tincidunt nulla eget vehicula
        tincidunt. Nam tincidunt in ipsum eu sollicitudin. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Nulla in convallis elit, dictum lobortis orci. Nulla maximus orci quis
        quam pellentesque iaculis. Aenean eleifend, velit et sagittis consequat,
        mi velit malesuada justo, eu vestibulum nisl est sit amet mi. Praesent
        consectetur euismod dignissim. Nullam arcu quam, efficitur iaculis risus
        nec, efficitur sollicitudin augue. Proin faucibus non est eu
        ullamcorper. Praesent ligula nibh, posuere nec tempus at, blandit eget
        lacus. Aliquam auctor lectus eu massa consectetur consectetur nec
        posuere ligula. Aenean rhoncus nunc tortor, non consequat risus eleifend
        quis. Praesent in consequat nunc, sed suscipit sapien. Aliquam et ipsum
        ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed
        quis metus vel augue consectetur mollis. Duis sed elementum ante. Donec
        iaculis fringilla turpis, interdum dignissim quam lacinia auctor.
        Pellentesque ultricies eleifend purus, non venenatis diam semper vel.
        Suspendisse vitae orci vitae ligula lobortis aliquam. Nulla dolor nulla,
        scelerisque at molestie id, venenatis tincidunt nibh. Phasellus sit amet
        ante vitae justo suscipit luctus. Donec id pellentesque ante, et
        porttitor ligula. Aliquam eu nibh efficitur, vulputate tortor ac,
        malesuada urna. Suspendisse feugiat, arcu eu imperdiet aliquet, odio
        libero sollicitudin justo, quis tempus arcu justo ut augue. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Mauris gravida egestas interdum. Curabitur nisi ante, consequat
        quis consectetur ac, dictum vel justo. Donec auctor nunc id metus
        accumsan, a elementum turpis blandit. Cras eget viverra nulla. Mauris
        maximus rutrum cursus. Pellentesque maximus eleifend vehicula. Aliquam
        ullamcorper magna neque, non ultrices est ultrices hendrerit. Vivamus
        viverra dui ut mi sollicitudin, vel maximus metus feugiat. Praesent
        facilisis justo sit amet libero fringilla, a viverra odio pellentesque.
        Aliquam bibendum, neque nec sagittis consectetur, tortor elit malesuada
        urna, non pretium lorem nisi et nunc. Vestibulum placerat dui gravida
        libero dictum aliquam. Nullam sagittis ultricies dui, vitae tempus
        tellus scelerisque a. Donec sed orci sed quam cursus consectetur. Cras
        eu fringilla nunc. Nunc porttitor lobortis lacus, sit amet porttitor
        mauris. Aenean accumsan felis eu ex volutpat, non hendrerit lacus
        volutpat. Nullam tincidunt ante et venenatis pharetra. Maecenas dapibus
        pulvinar euismod. Etiam non ante ac nulla tempor suscipit at id metus.
        Praesent at mollis sem. Mauris vitae enim eleifend, ultricies nisl sed,
        tempus dolor. In ullamcorper ultricies ex, eu interdum purus feugiat
        vitae. Nunc scelerisque imperdiet risus, id tempus nisi consequat eu.
        Nulla sed pretium erat, non consectetur est. Duis maximus urna risus,
        fermentum elementum massa tempor sit amet.
      </div>
      <div ref={end} style={{ maxWidth: "200px" }} className="start">
        <h1 style={{ borderBottom: "1px solid red" }}>end</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed risus
        nec risus sagittis facilisis non et tortor. Mauris tincidunt libero
        odio, finibus mollis orci consequat sit amet. Nullam vehicula odio ac
        odio ultrices ullamcorper. Aliquam et euismod ex, eu semper nulla.
        Aliquam finibus orci id justo rhoncus malesuada. Sed ultrices luctus
        nulla et rutrum. Donec iaculis libero non ante consequat, in condimentum
        lectus lobortis. Morbi maximus quis massa at sollicitudin. Nunc mollis
        eu magna ut dictum. Sed commodo sem in laoreet efficitur. Pellentesque a
        eros tristique, lobortis magna id, mollis lacus. Sed finibus nisi nec
        commodo lobortis. Vestibulum porta ante in leo pharetra, sit amet
        condimentum nibh accumsan. Mauris ut venenatis felis, et efficitur ante.
        Vivamus quis eros congue, tristique leo at, tincidunt ante. Nullam
        cursus, libero imperdiet euismod tempor, nunc velit auctor justo, sit
        amet egestas ex tellus sit amet tortor. Donec egestas, nibh quis maximus
        faucibus, dui nibh feugiat nisi, vel viverra quam turpis at magna.
        Aenean a tempus velit, nec convallis eros. Vestibulum cursus fermentum
        erat, a semper leo accumsan non. Fusce at purus nisi. Nulla cursus
        turpis quis mi accumsan imperdiet. Morbi et pellentesque felis. Donec ac
        rutrum massa. Curabitur vitae risus et tellus luctus rhoncus sit amet
        nec dui. Donec egestas aliquam feugiat. Suspendisse tincidunt tristique
        lorem elementum finibus. Aenean facilisis orci id aliquet congue. Proin
        quis convallis magna, ac lacinia risus. Maecenas blandit, enim a
        fermentum pellentesque, quam augue tristique magna, sit amet scelerisque
        dui sem ac diam. Etiam accumsan arcu et augue ullamcorper, non faucibus
        dolor accumsan. Vivamus mattis ac felis interdum convallis. Curabitur
        blandit eu felis at finibus. Duis at molestie leo, sed ornare velit.
        Nunc a est tincidunt, elementum elit quis, auctor eros. Donec mollis leo
        at ante pharetra iaculis. Donec id dolor est. Etiam ac purus velit.
        Aliquam non mattis turpis. Quisque iaculis lobortis finibus. Nullam
        metus nibh, vulputate at tellus ac, varius pellentesque diam. Integer
        vitae vestibulum enim. Fusce molestie orci ornare arcu eleifend auctor
        sit amet id lectus. Aliquam odio orci, eleifend tincidunt molestie at,
        mattis ut diam. Suspendisse malesuada mauris sem, et luctus libero
        lobortis at. Pellentesque vitae dapibus justo. Suspendisse ut lacus vel
        odio consectetur fermentum ut dictum velit. Nullam euismod dui gravida,
        semper nibh sit amet, vestibulum est. Vestibulum ultrices convallis
        justo vitae finibus. Maecenas est justo, viverra at quam sit amet,
        lobortis porta justo. Mauris ut sagittis sapien. Nulla sem lorem,
        laoreet ut consectetur at, molestie commodo sem. Duis ligula erat,
        porttitor eu suscipit eget, consectetur nec ligula. Integer mollis elit
        et rhoncus pretium. Morbi a commodo ex. Ut nec urna id ipsum feugiat
        gravida. Fusce commodo felis nec tempor sodales. Pellentesque sed
        eleifend tortor. Duis luctus condimentum augue, id accumsan lorem
        convallis ut. Curabitur in dictum nibh. Integer lobortis laoreet diam,
        in facilisis urna scelerisque ut. Aenean viverra erat velit, eu
        facilisis sapien consectetur id. Ut a fermentum neque, a posuere urna.
        Nulla mollis turpis tortor, eu sodales enim fermentum et. Morbi quis
        nisl et tortor luctus gravida et a lacus. Nullam eget finibus justo.
        Curabitur egestas neque vitae quam ultrices pharetra. Nulla facilisi.
        Morbi ut eleifend sapien. Curabitur tincidunt nulla eget vehicula
        tincidunt. Nam tincidunt in ipsum eu sollicitudin. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Nulla in convallis elit, dictum lobortis orci. Nulla maximus orci quis
        quam pellentesque iaculis. Aenean eleifend, velit et sagittis consequat,
        mi velit malesuada justo, eu vestibulum nisl est sit amet mi. Praesent
        consectetur euismod dignissim. Nullam arcu quam, efficitur iaculis risus
        nec, efficitur sollicitudin augue. Proin faucibus non est eu
        ullamcorper. Praesent ligula nibh, posuere nec tempus at, blandit eget
        lacus. Aliquam auctor lectus eu massa consectetur consectetur nec
        posuere ligula. Aenean rhoncus nunc tortor, non consequat risus eleifend
        quis. Praesent in consequat nunc, sed suscipit sapien. Aliquam et ipsum
        ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed
        quis metus vel augue consectetur mollis. Duis sed elementum ante. Donec
        iaculis fringilla turpis, interdum dignissim quam lacinia auctor.
        Pellentesque ultricies eleifend purus, non venenatis diam semper vel.
        Suspendisse vitae orci vitae ligula lobortis aliquam. Nulla dolor nulla,
        scelerisque at molestie id, venenatis tincidunt nibh. Phasellus sit amet
        ante vitae justo suscipit luctus. Donec id pellentesque ante, et
        porttitor ligula. Aliquam eu nibh efficitur, vulputate tortor ac,
        malesuada urna. Suspendisse feugiat, arcu eu imperdiet aliquet, odio
        libero sollicitudin justo, quis tempus arcu justo ut augue. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Mauris gravida egestas interdum. Curabitur nisi ante, consequat
        quis consectetur ac, dictum vel justo. Donec auctor nunc id metus
        accumsan, a elementum turpis blandit. Cras eget viverra nulla. Mauris
        maximus rutrum cursus. Pellentesque maximus eleifend vehicula. Aliquam
        ullamcorper magna neque, non ultrices est ultrices hendrerit. Vivamus
        viverra dui ut mi sollicitudin, vel maximus metus feugiat. Praesent
        facilisis justo sit amet libero fringilla, a viverra odio pellentesque.
        Aliquam bibendum, neque nec sagittis consectetur, tortor elit malesuada
        urna, non pretium lorem nisi et nunc. Vestibulum placerat dui gravida
        libero dictum aliquam. Nullam sagittis ultricies dui, vitae tempus
        tellus scelerisque a. Donec sed orci sed quam cursus consectetur. Cras
        eu fringilla nunc. Nunc porttitor lobortis lacus, sit amet porttitor
        mauris. Aenean accumsan felis eu ex volutpat, non hendrerit lacus
        volutpat. Nullam tincidunt ante et venenatis pharetra. Maecenas dapibus
        pulvinar euismod. Etiam non ante ac nulla tempor suscipit at id metus.
        Praesent at mollis sem. Mauris vitae enim eleifend, ultricies nisl sed,
        tempus dolor. In ullamcorper ultricies ex, eu interdum purus feugiat
        vitae. Nunc scelerisque imperdiet risus, id tempus nisi consequat eu.
        Nulla sed pretium erat, non consectetur est. Duis maximus urna risus,
        fermentum elementum massa tempor sit amet.
      </div>
    </div>
  );
}
