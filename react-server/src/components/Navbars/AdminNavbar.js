import React, { useState  } from "react";
import { useLocation, useHistory  } from "react-router-dom";
import { Navbar, Container, Nav, Button, Form } from "react-bootstrap";

import routes from "../../routes.js";

function Header() {
  const location = useLocation();
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");

  async function getUser(e) {
    e.preventDefault();
    try {

      const response = await fetch(`http://127.0.0.1:8080/char/${searchInput}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`서버 오류: ${response.status}`);
      }

      const data = await response.json();
      history.push("/admin/dashboard", { searchResult: data });

    } catch (err) {
      console.error("데이터 요청 실패:", err);
    }
  }

  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}
          >
            <i className="fas fa-ellipsis-v"></i>
          </Button>
          <Navbar.Brand
            href="#home"
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          >
            {getBrandText()}
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" navbar>
            <Nav.Item>
              <div className="d-flex align-items-center">
                <Form className="ml-2" onSubmit={getUser}>
                  <Form.Control
                      type="text"
                      placeholder="캐릭터명 입력"
                      className="form-control"
                      style={{width: "400px"}}
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                  />
                </Form>
                <Nav.Link
                    className="m-0"
                    href="#"
                    onClick={(e) => getUser(e)}
                >
                  <i className="nc-icon nc-zoom-split"></i>
                  <span className="d-lg-block"> Search</span>
                </Nav.Link>
              </div>
            </Nav.Item>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
