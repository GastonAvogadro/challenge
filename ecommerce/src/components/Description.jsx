import { useState } from "react";

function Description() {
  const [selectedSection, setSelectedSection] = useState("description");
  return (
    <section className="pb-8 md:pb-20 max-w-[90%]">
      <nav className="flex md:gap-14 justify-around items-center md:w-[1016px]">
        <div className="flex flex-col items-center relative">
          <p
            onClick={() => setSelectedSection("description")}
            className="text-[0.85rem] md:text-[1.37rem] font-medium cursor-pointer mb-2"
          >
            Description
          </p>

          {selectedSection === "description" && (
            <div className="w-[100px] md:w-[189px] h-[1px] bg-redPrimary absolute bottom-0"></div>
          )}
        </div>
        <div className="flex flex-col items-center relative">
          <p
            onClick={() => setSelectedSection("specification")}
            className="text-[0.85rem] md:text-[1.37rem] font-medium cursor-pointer mb-2"
          >
            Specification
          </p>
          {selectedSection === "specification" && (
            <div className="w-[100px] md:w-[189px] h-[1px] bg-redPrimary absolute bottom-0"></div>
          )}
        </div>
        <div className="flex flex-col items-center relative">
          <p
            onClick={() => setSelectedSection("reviews")}
            className="text-[0.85rem] md:text-[1.37rem] font-medium cursor-pointer mb-2"
          >
            Reviews
          </p>
          {selectedSection === "reviews" && (
            <div className="w-[100px] md:w-[189px] h-[1px] bg-redPrimary absolute bottom-0"></div>
          )}
        </div>
      </nav>
      <div className="md:w-[1016px] md:min-h-[132px]">
        {/* Renderizar el párrafo correspondiente a la sección seleccionada */}
        {selectedSection === "description" && (
          <p className="text-[0.9rem] md:text-[1.1rem] font-light mt-6">
            The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all around OLED TV we've
            tested. Although all OLEDs deliver similar fantastic picture quality, this one
            stands out for its value because it has many gaming oriented features that are
            great for gamers. *Only 65G2 is shown in the image for example purposes. All
            2022 LG OLED models feature eco-friendly packaging. **65C2 Stand model is at a
            minimum 39% lighter than the C1 series. More...
          </p>
        )}
        {selectedSection === "specification" && (
          <p className="text-[0.9rem] md:text-[1.1rem] font-light mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis, metus eu
            rhoncus efficitur, turpis sem tempus massa, id consectetur nunc purus in
            lectus. Donec non velit a odio volutpat volutpat in in nisi. Maecenas aliquet
            turpis lacus, id pharetra elit sagittis vel. Ut consectetur nisi quis
            ullamcorper pellentesque. Integer efficitur interdum nunc, ut elementum nulla.
            Phasellus feugiat nulla et rhoncus porttitor. Nullam at lectus sed turpis
            porttitor viverra accumsan hendrerit lorem. Praesent tincidunt nisi at nunc
            suscipit malesuada.
          </p>
        )}
        {selectedSection === "reviews" && (
          <p className="text-[0.9rem] md:text-[1.1rem] font-light mt-6">
            Suspendisse potenti. Sed dapibus bibendum orci, eget semper diam tincidunt
            eget. Nulla a mi non nulla fermentum molestie. Aenean magna massa, tempus quis
            risus nec, sollicitudin consectetur mi. Donec dictum nulla sed nulla semper
            elementum. Nulla dictum ultrices risus, id ornare arcu rutrum vel. Curabitur
            vestibulum id nisi at pellentesque. Aenean a lacinia tellus. Aliquam iaculis
            odio sit amet velit laoreet, non feugiat tellus elementum.
          </p>
        )}
      </div>
    </section>
  );
}

export default Description;
