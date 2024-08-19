interface CardProps {
  imageUrl: string;
  title: string;
  location: string;
  googleMapsUrl: string;
  startDate: string;
  endDate: string;
  description: string;
}

function Card(props: CardProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full md:max-w-[60rem]">
      <div className="w-full md:w-44 h-32 md:h-60">
        <img
          className="w-full h-full rounded-none md:rounded-xl object-cover object-center"
          src={props.imageUrl}
          alt={props.title}
        />
      </div>
      <div className="flex-none md:flex-1">
        <p className="flex flex-row items-center gap-4 text-sm">
          <span className="flex flex-row items-center gap-1 uppercase">
            <svg
              width="16"
              height="16"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.57866 5.25002C2.65532 5.25002 1.90837 4.50221 1.90837 3.57965C1.90837 2.65757 2.65532 1.90911 3.57866 1.90911C4.50167 1.90911 5.24927 2.65757 5.24927 3.57965C5.24927 4.50221 4.50167 5.25002 3.57866 5.25002ZM3.48394 0C1.54227 0 0 1.63678 0 3.65569C0 6.40791 2.95078 9.25191 2.95078 9.25191C3.34777 9.62783 3.59437 9.65847 4.01646 9.25191C4.01646 9.25191 7 6.40791 7 3.65569C7 1.63678 5.42544 0 3.48394 0Z"
                fill="#F55A5A"
              />
            </svg>
            {props.location}
          </span>
          <a
            className="text-[#918E9B] underline"
            href={props.googleMapsUrl}
            target="_blank"
          >
            View On Google Maps
          </a>
        </p>
        <h2 className="font-bold text-[#2B283A] text-2xl pt-1">
          {props.title}
        </h2>
        <p className="font-bold text-sm text-[#2B283A] pt-6">
          {props.startDate} - {props.endDate}
        </p>
        <p className="text-[#2B283A] text-sm pt-2">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
