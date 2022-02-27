import Marquee from "react-marquee-slider";

const LogoCloud = ({ data, size = "large" }) => {
  return (
    <>
      <div>
        <Marquee>
          {data.map((logoData) => (
            <div
              className={`relative rounded-xl mx-5 overflow-hidden `}
              key={logoData.id}
            >
              {size !== "mobile" && (
                <img
                  className={`container-img p-6`}
                  src={`/img/clients/${logoData.logo}`}
                  alt={logoData.name}
                />
              )}
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default LogoCloud;
