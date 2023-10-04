import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "../components/Product";
import Paginate from "../components/Paginate";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";
import { PRODUCT_CREATE_RESET } from "../types/productConstants";
import RecommendedProducts from "../components/RecommendedProducts";

const Landing = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userData } = userLogin;
  // const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    dispatch(listProducts(keyword, pageNumber));

    // // Fetch and set the recommended products only once when the component mounts
    // if (recommendedProducts.length === 0) {
    //   // Replace this with your logic to fetch recommended products
    //   const recommendedProductsData = [
    //     // Your recommended products data goes here
    //   ];

    // setRecommendedProducts(recommendedProductsData);
    // }
  }, [dispatch, keyword, pageNumber]);

  
  
  return (
    <>
      <Meta />
      {keyword && (
        <Link className="btn btn-success" to="/">
          Go Back
        </Link>
      )}
      <Row className="align-items-center">
        <Col>
          <h3 style={{fontWeight:800}}> Latest Products On Sale</h3>
        </Col>
        <Col className="text-right">
          <LinkContainer to={userData ? "/createproduct" : "/login"}>
            <Button
              className="btn-primary"
              style={{ color: "white", backgroundColor: "red" }}
            >
              <i style={{ color: "white" }} className="fas fa-plus"></i>{" "}
              <span className="textcolor">Sell your Product</span>
            </Button>
          </LinkContainer>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            className="paginate"
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
        
      )}

       {/* Recommended Products Section
       <h3 style={{ fontWeight: 800 }}>Recommended Products</h3>
      <RecommendedProducts products={recommendedProducts} /> */}
{/*   
       <h3 style={{ fontWeight: 800, textAlign:"center"}}>👉Recommended/ Featured Section Coming Soon😉</h3> */}
  
    </>
  );
};
export default Landing;
