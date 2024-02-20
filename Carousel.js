import { Carousel } from "react-responsive-carousel";

function CarouselExample() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push(<img key={i} src={`https://picsum.photos/id/${i + 1}`} alt={`Изображение ${i + 1}`} />);
  }

  const handleIndexChange = (newIndex) => {
    setActiveIndex(newIndex);
  };

  return (
    <>
      <Carousel activeIndex={activeIndex} onIndexChange={handleIndexChange}>
        {items}
      </Carousel>
    </>
  );
};

export default CarouselExample;