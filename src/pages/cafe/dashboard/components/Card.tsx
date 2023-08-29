type CardType = "pendapatan" | "oli" | "minyakGoreng";

type CardProps = {
  title: string;
  value: string;
  upPercent?: string;
  downPercent?: string;
  icon: CardType;
};

function Card(props: CardProps) {
  const ICON_MAP: Record<CardType, string> = {
    pendapatan: "fa-solid fa-coins",
    minyakGoreng: "fa-solid fa-oil-can",
    oli: "fa-solid fa-bottle-droplet",
  };
  return (
    <div className="w-full max-w-full">
      <div className="shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl bg-white bg-clip-border">
        <div className="flex-auto p-4">
          <div className="-mx-3 flex flex-row">
            <div className="w-2/3 max-w-full flex-none px-3">
              <div className="w-max">
                <p className="mb-1 font-bold leading-normal">{props.title}</p>
                <h5 className="mb-0 font-semibold">
                  {props.value}
                  {props.upPercent ? (
                    <span className="ml-1 text-sm leading-normal text-green-500">+{props.upPercent}%</span>
                  ) : (
                    <span className="ml-1 text-sm leading-normal text-red-500">-{props.downPercent}%</span>
                  )}
                </h5>
              </div>
            </div>
            <div className="basis-1/3 px-3 text-right">
              <div className="inline-block h-12 w-12 rounded-lg bg-gradient-to-tl from-blue-700 to-red-500 text-center">
                <i className={`${ICON_MAP[props.icon]} relative top-3.5 text-lg leading-none text-white`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
