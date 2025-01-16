import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import AdminNavbar from "../components/Navbars/AdminNavbar";

function Dashboard() {
  const location = useLocation();
  const searchResult = location.state && location.state.searchResult ? location.state.searchResult : "";

  const backgroundUrl = searchResult
      ? `url('https://img.lostark.co.kr/armory/6/${searchResult.loaCharacter.armoryProfile.characterImage}.jpg')`
      : "url('https://img.lostark.co.kr/default.jpg')";

  console.log(searchResult);
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5" style={{minHeight: "74px"}}>
                    <div className="icon-big text-center icon-warning">

                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">서버</p>
                      <Card.Title as="h4">{searchResult.loaCharacter.armoryProfile.serverName}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="1">

                  </Col>
                  <Col xs="11" style={{minHeight: "74px", maxHeight: "100px"}}>
                    <div className="numbers">
                      <p className="card-category">칭호</p>
                      <Card.Title as="h4">{searchResult.loaCharacter.armoryProfile.title}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="1">

                  </Col>
                  <Col xs="11" style={{minHeight: "74px", maxHeight: "100px"}}>
                    <div className="numbers">
                      <p className="card-category">클래스</p>
                      <Card.Title as="h4">{searchResult.loaCharacter.armoryProfile.characterClassName}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="1">

                  </Col>
                  <Col xs="11" style={{minHeight: "74px", maxHeight: "100px"}}>
                    <div className="numbers">
                      <p className="card-category">레벨</p>
                      <Card.Title as="h4">{searchResult.loaCharacter.armoryProfile.itemMaxLevel}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">초월</p>
                      <Card.Title as="h4">150GB</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">엘릭서</p>
                      <Card.Title as="h4">$ 1,345</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>

                  <Col xs="12" style={{minHeight: "74px"}}>
                    <div className="numbers">
                      <p className="card-category">아크패시브</p>
                      <Card.Title as="h4">23</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">보석</p>
                      <Card.Title as="h4">+45K</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="3">
            <Card style={{
              minHeight: "480px",

            }}
            >
              <Card.Header>
                <Card.Title as="h5">{searchResult.loaCharacter.armoryProfile.characterName}</Card.Title>

              </Card.Header>
              <Card.Body style={{
                backgroundImage: backgroundUrl,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}>

              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card style={{ maxHeight: "480px", minHeight: "480px" }}>
              <Card.Body
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr", // 4개의 세로 영역 생성
                    alignItems: "center",

                    height: "100%",
                    width: "100%",
                  }}
              >
                {/* 1번 위치 (네모 박스 6개) */}
                <div style={{ display: "flex", flexDirection: "column",gap: "10px", alignItems: "flex-start"}}>
                  {[...Array(6)].map((_, index) => (
                      <div
                          key={index}
                          style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#007bff", // 파란색
                            borderRadius: "5px",
                          }}
                      ></div>
                  ))}
                </div>

                <div style={{display: "flex",flexDirection: "column", gap: "10px"}}>
                  {[...Array(6)].map((_, index) => (
                      <div
                          key={index}
                          style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#007bff", // 파란색
                            borderRadius: "5px",
                          }}
                      ></div>
                  ))}
                </div>

                {/* 3번 위치 (네모 박스 6개) */}
                <div style={{display: "flex",flexDirection: "column", gap: "10px"}}>
                  {[...Array(7)].map((_, index) => (
                      <div
                          key={index}
                          style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#28a745", // 초록색
                            borderRadius: "5px",
                          }}
                      ></div>
                  ))}
                </div>

                {/* 4번 위치 (비워둠) */}
                <div style={{display: "flex",flexDirection: "column", gap: "10px"}}>
                  {[...Array(7)].map((_, index) => (
                      <div
                          key={index}
                          style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#007bff", // 파란색
                            borderRadius: "5px",
                          }}
                      ></div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <Card style={{maxHeight: "480px", minHeight: "480px"}}>
              <Card.Body
                  style={{
                    display: "grid",
                    gridTemplateRows: "1.5fr 1.2fr 1fr", // 3칸으로 나누기
                    gap: "10px", // 칸 사이 여백 추가
                    textAlign: "left", // 텍스트 중앙 정렬
                  }}
              >
                <div>
                  각인
                </div>
                <div>
                  특성
                </div>
                <div>
                  기본정보
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default Dashboard;
