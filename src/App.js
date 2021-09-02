import "./App.css";
import { Container, Row, Col } from "react-grid-system";
import CategoryCard from "./components/CategoryCard/CategoryCard";
const categories = [
  {
    icon: "vip-1.svg",
    text: "VIP Access",
  },
  {
    icon: "content-2.svg",
    text: "Exclusive content",
  },
  {
    icon: "collab-3.svg",
    text: "Collab",
  },
  {
    icon: "hangout-4.svg",
    text: "Hangout",
  },
  {
    icon: "Mentorship-5.svg",
    text: "Mentorship",
  },
  {
    icon: "Scholar-6.svg",
    text: "Scholarship",
  },
];

function App() {
  return (
    <div className="grid-categories">
      <Container>
        <Row>
          {categories.map((category, index) => (
            <Col xs={6} sm={6} lg={4} key={index} className="list">
              <CategoryCard imagePath={category.icon} text={category.text} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
