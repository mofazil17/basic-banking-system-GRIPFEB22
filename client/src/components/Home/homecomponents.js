import React from "react";
import { Container, Card, Carousel, Row } from "react-bootstrap";
import { Link} from "react-router-dom";
import "./style.css";

export function Banner() {
  return (
    <div>
      <Container className="banner" style={{padding:"1rem"}}>
        <img
          src="https://internship.thesparksfoundation.info/assests/img/logo.png"
          alt=""
          className="image-fluid"
        />
        <h1>SPARKS BANK</h1>
      </Container>
    </div>
  );
}

export function Cards() {
  return (
    <div>
      <Container className="services">
        <Row>
          <div className="col-lg-4 col-md-12">
            <Card style={{ width: "22rem" }}>
              <Card.Img
                variant="top"
                className="image-thumbnail"
                src="data:image/jpeg;base64,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"
              />
              <Card.Body>
                <Card.Title>Money Savings</Card.Title>
                <Card.Text className="text-muted">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Soluta incidunt corporis ea repellat qui excepturi, similique
                  dolorum quaerat quasi rerum, accusamus veritatis est natus
                  laudantium.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-12 ">
            <Card style={{ width: "22rem" }}>
              <Card.Img
                variant="top"
                className="image-thumbnail"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAADnCAMAAABPJ7iaAAAAk1BMVEX39/f/ZgD/XwD3+vv/WwD3/f//WQD/YwD3/P72///39PH7tJb3+fn51sf+eTD508H47un/aQD45Nr6wKf46uP6yLP8onr47en52sz53tH7sZH9k2P50L7+hEj6xK37uZ39ilL8p4P+ciP9jln+fDr9k2L9mWz8nnT+gEH7uJz8qoj/bxn6vqT6xrL/cCD9jFX+dzbPHdqmAAAU5UlEQVR4nO1dC3vqKBNWCCREtDFe6t16qVr1tOf//7pNIFaTGQhe27OP83y7X1djwgvD8M4lUKk85SlPecpTnvKUpyQiKaVBELBERCbp38lHyRfyp1t3mSSYAiYqYVzvTAez1WK8Wf5NpPF3uXl7X28H+049DisJyH8KoUxABWH/z/Z92fS455FE/Jykn3jJV9XG12xfj2QC8PfjS2GF9Y/hPGl4gqdaIilKj+/etqOIst8ML4U1mi09F1B5hAm+z9WkHfxOeAmuuDZOYZ2FKgdv3n2p/DZ0MmD92Y5fCusEHhl2QkZ/Gs9BJBXx9npcB3ieNxxR9huGTjI52dwK1wGdP4vFTw8dFe0Z8W6JSwvh45EIfnDoqOi/c3JzXEp83tzLnwJHRW/Mbz9gR3CeX6v8BLhkxO4KTAkhNRk8GJhk7cXdgaXiVVuPXQuCsOsOTHPGlDVqPqkY5Rng5nXxMK2kYuK7GA9FEL3m8m01G9Sm+9Zk0tpPa4PtejFuaOLsBNHni4g9Bhlrb3g5Ko833xJaHye6q/wz5aFR9Uf6gay065PB8C/hDtSMkGnwAK2krFaiiz7hZDwYpb5K4qyYdEkqj45V4s5sQ0qXfG8Z333gWHvpWXF53nLQqwhXDywFKMJebZzQR/t9a/clX1K0bNQjwfXWis53LGUKb7RuWpd/bxzdcR2g4btllhG+3EfiUp9EJpS4161aes4nI3FbPEdh8c7crYSs++xK7pCgG31ZFJPP7kROxMTcpV61dhM3K3GQ2lvf+BxvHN7BUko2Myqjd0smK1llvzOBI8345hOOVt5MlpFUb0zRZUAnO8PTfO/WE45Gc8MUIN6gcnvLFcipifDw6U2xBXEV1xCfr6L7rDdmmspnN8QW9A1swZv37kZdpYgN7ICvbvZQVscNiM8Hd6V2VEzxgfPeb4SNveDIyPzuvM5E67zFTWaBCRnv0vuzcSq26NNvMm4Bro0p63mIgyjq6Dz3VlfbkqCPIiONe3LVfAuiBrYMeN0rsdEY1XU+lI8LWFC5wBrBa1dhoxHq4vPB46IVlXQZ6GKqwztXWDEZfqLIOndzLgwiBhg2r3+x6shgjGi579UfFIQ5EfGBYPOr0aXKI9aIjvuk/+igp2rLFMO2udDxZXvsbv7tvQonETWkNReaSdr7TcgSbNjizUcXNEdGCNn3yY8hM82PC6Ybw0yI9yPzLBPJ3mCTyNvZKskGSBfx+g8iS7BV5lCReOvMNqETjf95vNXPt6qNaBI5TyVlpYn0z+DRKzWQYAR7nCzOapZYIVp9Pde+XsQMzhP+cgYpoUjn+H9/Ra0KawB18nfu8wRVRz/66WoHJbQNe93bO1sS0YXq+MPG8ShsClWSGFNdBaGI9+n9vAk5iFgClSIDR5UUiDpvHmv2qRDFuE5ajqiyCjRGej50GrZggoz4Yyca6zSa62NrU1QiqtdWq1Haw2wG5gvZunS9rCAr2uShE42+cL/qvaetzVB9DHeqeoGnBgNrIXEZNraFffL12InG3lUTGA1Epa9RZXEMf5e2BNErUivvfBlh6vioFS3NbCfDpAzFrp0l8E/GSEOrMMglm+UzhkHDf8aycSUkGcWj/WzYyJ5bLLvwCZ8oBLQD+t/rlGGTETA/fuN+6iizmvmoP5rOFo1qWoyN1smoOpTx4OAtQk5SbsORQeOXx41KIDEWtuuT7dACSaFKtPJvt9NOa+az3yPDxmN7M5FBuykrziAFCaQ/g/X407dXMylUjdW0F7JCtTXdFX9EZvZhQ8wjv4UNyRSPHiAR9WYDjinBo/+fk/l63wsFVocSQLrVtLZTVqDhL+mMMkzKPrAwrrcGq40dkqpWI7vlap22wh8aUOn7hnAMrL4N0heOFMYASYb90X67aJRC8jx/99atdfpRIEQvbYX3x5pCY+siNrK2DYKAGuzEYFBI0+1iWeVm+3BYhT+/uh+dXjsZouzdIW0jvJHVLGAc3sL/KUyluQ5aBolqK26FlJVJkt04/ZrUMkjH59BWOiBlhhku27xu/gV7P9fsZC9zsaASq4WJlEBKMVXfklHqt6VQTiXZAj4QDBS0V3unBjWgkTMjtUAsP28byxn1wiTbvUltNW6WjVICyV+utq1RHB0UT5qg6bW1jPBK4Nv4cyO0YAr6YVhc09RbhCyhRHF9MtCQUkwoJPU4zqubBNJLnM2lo8XTPUm6ENpQ3a9SMhWgW2keCMheeO9UeykTInSApK246lP/69s8gKfKUEGDdo0pdvxZNhW03p6KNzFMNui95tkjHa03fimkBNN80Z2OYpGaOf/NnD7NoK0ABGWny5krtJHIvYy9kKP8wcBYc5ySV+7Nv9apFVdV1JQK9cXG0kCpoA1Bc2j6GH9cuurIZrEZn4ZRg9Y0P5MBJVWjpP4Y70fJWstyL7WK9Hb+X0sDWQrNfy9eoYmGDyGD3w/BBMJJIaKP+bsfTVKCKTV588VsquCSroDv6bKN8icttoAplf0C0CJ9z1Joev3LqRm+zMN1onChrGRd09y8b1v1tgwSxat4ph5mizI7x9TovAFopkUBQAODQQboj3Qv50at0Cyh6UNITxWvijYvvd+qbHViWpmLv9XmwSXYUakWWwxUIBUYEwH2JlAej5dz+YJ0wfDniLHQ/NXmErGmglb8LX1RFNJkyE9EvBVGw99hP4J+K1Bc+kc9MxeEYGokqwg03RE8tkBTRn4JRs2FHZ88ItdmrCdh5ADoUqYpuUmg1Y4jzQg+ykiuMsl+o6h42jp4Fq77fSUYjjzHOLSkaPp9EHzMrPLitJuzsUE6i6pgoa2FTCtz8YKMHVuG+/sRwI54f+DjIDUmMESnGVBO+7KxQUIudFSmV9nyAKAp/UFVq9ho4GpjJhIZW9hcxDJkY9NDRk37yi0LtK8UGghpaB2vujiKQNUwTzsAKQLE2GjXIKdj2dgg8U3ZViuvxYZr99AH0FLE/qdLWJcBE4nQM1Fc1TCqSeuqtR8nT9VjgyjvgVRYVt5s5StC0wzNKa4bFG0fsgzJEPDHvWlC5kBr9oWpuAzL+FI2qYp8RTiy4wrGoKrgGmhrUKstd9XvlMIBgMHpSpqo7CnKD7KGaetagObMjiuHlTY3ImCKwmt8bBrric9PvtKRS0jfU2iKbCzNipVZ+cKDsjkKnW8MWh0YPxBRAes67mjpxuSKR5XThF6t58zcMmof2JqYqXg5O65g3ii068DU4L2W2cNTg87++gUd/f5mjNp2AK0Q0KB9YKuMIkGlhQfoSFCsMSboepT5G6ewNQCCQVOeIqrY2UOn2HKfdR9CK5D2hABaMToOl3WIXl/oa/Wj3yLU4sQZBSLUAk8q8JtM2F5DC/KfOrNjtN2A00MDifMcvfyR+ujlIHXlcXrHD47fKNBe5wX5TouiCWRf+NnMlR0fveMTaEXyoJXgVAxTJPMPvBPRmuwhYv4mE93lBPvUMV8JIj8AWrAvGkiDzYbhiDuJK7RdEVpxjkLbb1gxsfzI74bGiuWPpmVFs6dfBK1o2SE0QI6nhmUlC57zE1E/8DkU3QsE+cZ6wVnQwKgV55oo+j3GKowsYNAOX6Mo+V/0+qqWOn8V6f9O//X6+pr8E4XaKdiG6nMtr6+nf7xotyf90ffnUah4qhM7doEGDY3J9moGkax68lt0VEHIolBNBrcMfHO4QFOqj/wFKjppjN4XBTS8sK7Blc9YhJG5bCf6qsocsIIUfVeLV5NByzurmZtnzgLmLobrWoGNwBikMXwIXTYdMGliQdYS7wT19aR6F9AQBgZ3KGVRCMs0Mr9AMf2TQmbNrInRqzHPGjQCnrFjkxkrQoPMv0i2QSbDCA24bGyIOZQKWsMeCcig5XXvHHaMjEnRX9MBjlNpGu+WucZH26wDRliuVY+nOVdzyPjmhjULkTmxYyx7WBgTHWU/FXN7skcfI/I6PoHZHb1QmBUATYtmUTPc8QCNAV52kfsCdgxDusdr44IWaf7p1ZFRW5fESrG06CFV4AYNZDOLES14hSWZSdVQHI2DORJpVtVMdFo0F2jPfAvHmjdQMwHSYQg0c7Amc6u/H50lOZBIZKaqZsokOGxNeVru9AlFWg9WURDPssahunmNyYwBEiUuTbmIggIoaF9ORSPZxcXyJNCMs6BRPbe+FVBKQ2XLIR9nNnZYMFWvGKZSguIN/pZxXwjNNtd6BbpAq3DG6C/KliiBBPpKo5cnAnkW0H4410A+7+R+YWHyq3QJTG5+d4KZWAgkLSpgDs/cFLBiw3QntKEWhVB52pNEjnb2mohCGvMBBxiwtERWHCsr1AOK6zEM6DpHfTSUVd4864nvGdNQZhKfMbHT7zPi78aOQTYDcnHIRmwWSt/w6D1kUKG5llGJV6PewshrSOYNuLHjcgOJcEjbuqLHmHwcjh4QevmKBBRlAYfIF5mMdWXGqfRNBABrSbGeGC40SITVAi2bvLvGQT6VLjQQ0cqNfaNF+8i5j1QoA4S3bQ05hQaajfgGtvy/yOrwD1LN/+eJmL8xf6+a6MSOofWDZhp62dZ7g7TOzcWlsgKph0csFkz3Wv0lWGRzc2hOFBJONUSPaTHmhbHd49UdTu4m+vEuFBIprEN6BFQoW5OS8rV2N5lq01MODKm6RfPmMClqjQPK4G4i8OImTEAVOFp+A2rPrDXD9xR3duyYE4QV1bbC2ntKVmfuQCHB+2h4WBDWVlz4AtS1YiyQRy4FMXG0OBQyLbSw8P7iXHeM1Mvh5FC+AsriUB97B6HO7NipqExJAZlrPuHWklUalrNjuEGPKbwEdoOA1c65G99L2Kis9PXQYFAuiLj5SuDriRaPTbK4fnvppf/0imF3U9+CiLhxpOH7Xeb4rQw33FIxcZ3oyopSdgxmmr8zTSAYPDfbkaB771R9KTsOOmDQjLtpwcoC8/uy9/dpytixBHle37K7A3gNylz8G+B72t4QmSVUqATuPcQ7ZXXAuavNr4l2q/dzagjx38wJECXQ8FsrlZEXpsxl7KwS3kG+b1qyWzOyFZaVOyFvr9kiuKZ6iQuFsiCMe/1XKQJZum+UWJS/rZtvbHFm2oo0bys0qK8/PZ6+Ofs1Kd1AH9lxtiRlpbPtOY10yydfLaLe+D6mxvf8qf3UAwbsfummShRsBeRccXOVyKCwbb+3tG1sxeBueqWbX2I737jl764SKcG5FaTZNqet4Jg5TBxWTMO5a6Q66emyfQjZFwz8+U1DYyW2+zF/KfVRYBDBd9tTkrJ4uu1uW+0LDl5k2E7Nps0sA+wAIG9b3khkKzind8hEZ67Ckh4fn33YBDIL9IO78E5UdKqX7jKLvHJe/pYtDY+nAvp87bqZYSbGOLT3nl8EJBU97GQ0f+e0QiEaafQUvpFFzdMfkeV5lkfgwNI7VSfZJkxSnYU1WWK7FPiO+3HCDTxKDYmUhZE+b3c7bDvE47Ors5e2FDSMR7Uxx08b8tyKgr5fBT3tlZJIKwObvnK3pF8GDW70lesnLytRNu1n4vVcAzhBC24pZo3ZIVv3WXZqQR4IfPuzxB0ZVunuWw0QhX1x1jZwupD5Qjlv830k+GNtKXK9PX1VEFp8KeQcZNWzNnJHprU1aIeFEs4JYMKIjLOQxplbqOq9KXJi3ZzqSmiwdNhV+OrcE1eQXaptvjmy46Lj64KZCLBxl5P4Xuv8E1fAaxpp1M7YVugInbmbJLr/fKnwTfuCqD220tiKh8GonWX802E725AQ/8LzihnYkK9K1kaVvHLJTjsH2c3cCsybhRcmWrBhM6/b4FgE4lbtd/K8+IxDmH2PzK44ow+Zbf7OSOhpu3oNPVZ3+MzrpAmqT3hjXxbIsz8KOW2NmE+DodHmxKkZXhByoJXuyfm2Ph83IGlMN7dqDOJrT2QFmauq1UmXrJO2Rbmilx3ZLVl7VlW3IB5Z1IWIW6v54dxwL92wqzqedSJx/dmDqKdhOw2GinZnsK11LgkgaJGM9ieD2aBVVyfKSspE2O51Jq1Wa9KpxxFzPse5RJCN10s2TJb04rDPQdQh4ac7LMpjqvR2cTX0eImrz6j7HYIdClLlkx8+o+Y2IkCQPMXm7vj9YpEhRJYsAeag7j8kAXaUqN+8x1nVDxfsOJeE+v4fsEkKTz1JXdvK/wAbemZWwhH/D+OGnZmVjtv/AZvYYjEZ8vk7joa6ThhIhytbcl6Q7HeKrGCmJPEHX/59zkUj3LvnHw89wfcuQmM8kZC4nP/8hAv6eHiXfN796Pa7i+GI88TPn14WMftFwgzYqt64/a8PnBGb7/3zAxf0THvde43+P24qg74p4erz4RURTyeh970/bRuj14TProp6lj1Z9N+nd9V6Gv41Zh2IN4vuM+doQDtLzi0bJ99CJEVKiI4jt44vDkEanxiIeOt7vmEPzls+CSmwPAU3HtHrg7vHpwWiPW3ocPndoSWLwIvlNJpkJahu4xuErlW4VsTT5Xfx5wOgVYJoYy9g4Y1afF0EW5Us1Wef/KQXHwEtmdZb42kueugI/5zVw4vgSZoG+uuDMSmkaR4CLVHK3q4kP+snLRsP6pE6E84JYHaeXthvrRtFWA+EpnJhpUnMFN589fHSrgh1Fo+E9e1SZyvSw6UqUa+zHc6JqRLrUdASS9mbu5SxqCOUqo3hbNrpxVGYHjcsWCrp5hS0EkZRXB+1Bt23uTqc0pL0fRi0NFtU81yrBrJDopLrd/PGcpPKstGY75o+0WdL2TA9Hloy46JhuVZClMX9KhzlodASreyPzwd3oTwWWkpbX9CC2f8BtNTZeNk8BJyHnAZxd3Cit+BXVaE6COG7H3n3nYr2zMfrnW8ivucN6z8VpJCs0hlzG2++HBfhm1b4k9EXmQxdbX5rdGl9zb4tblhWcSG6xAupNQyV+OdLMlz+qpOQ7J/GpSVxRqLJkFw7eOlpkGQxjQX78fE6FUkZ60+HVfMLB1ZQ6ozLZXcSC3ZDd/12knon7c72q1lyRGwOkjpedf4+6MQyGa3fCOsgMnVVwt5kMNw0eUaCSW57M/32dXq2Kifzt9WgVY/16Yk/3XQnyY5jlu3+y2Q6mK3fF29jJW9vi/fVejb42Hfq/XaorrplfdnjRB1mnJ6jnflq2R/q/UvsWN+nPOUpT3nKU57ylKc85SlPOUv+A5I5aAllPvt0AAAAAElFTkSuQmCC"
              />
              <Card.Body>
                <Card.Title>Online Shopping</Card.Title>
                <Card.Text className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae modi non enim exercitationem facilis animi illo
                  praesentium, in, earum blanditiis ullam unde, cumque fugiat
                  magni!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-12">
            <Card style={{ width: "22rem" }}>
              <Card.Img
                variant="top"
                className="image-thumbnail"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-2UASCMHOMZt4yI35XkuSoSx5VYcstjNtQ&usqp=CAU"
              />
              <Card.Body>
                <Card.Title>Credit / Debit card</Card.Title>
                <Card.Text className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae modi non enim exercitationem facilis animi illo
                  praesentium, in, earum blanditiis ullam unde, cumque fugiat
                  magni!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export function Clients() {
  return (
    <div className="d-none d-lg-block">
      <div className="display-6 m-1 ms-5 mb-3 " style={{ color: "black" }}>
        <u>Customers Opinion</u>
      </div> 
      <Container className="carousal-container ">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-25"
              src="https://randomuser.me/api/portraits/men/11.jpg"
              alt="First slide"
              width="100px"
              height="300px"
            />
            <Carousel.Caption>
              <h3>Alex</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                odit quisquam aliquid corporis, neque minima nostrum harum,
                dicta qui eum facere repellendus consectetur, id ipsa vitae
                totam non porro saepe adipisci tempore eos fugit blanditiis
                magni cumque? Laudantium, enim libero sit quaerat tempore omnis,
                laboriosam et iusto accusamus deleniti fugiat?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-25"
              src="https://randomuser.me/api/portraits/women/10.jpg"
              alt="Second slide"
              width="100px"
              height="300px"
            />
            <Carousel.Caption>
              <h3>Sara</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                placeat tempore praesentium, laboriosam qui molestias totam
                facilis inventore molestiae iusto cupiditate aliquid vitae hic
                eveniet adipisci aperiam sit. Quam obcaecati officiis
                repudiandae voluptates. Expedita soluta corporis recusandae
                accusantium! Inventore nam obcaecati architecto, eaque eos
                mollitia consequuntur laborum nemo harum illo!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-25"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Third slide"
              width="100px"
              height="300px"
            />
            <Carousel.Caption>
              <h3>Steve</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
                delectus a. Aspernatur nesciunt iure recusandae assumenda ad
                culpa nisi vero debitis, voluptates laboriosam, quis adipisci
                nam. Earum illo in tempore fuga eveniet error, modi animi
                eligendi repellat ipsa perspiciatis iusto qui itaque illum enim
                quae numquam commodi vel! Cumque, blanditiis!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export function Connections() {
  return (
    <div>
      <Container className="connections">
        <Row>
          <div className="col-lg-4 col-md-12">
            <h4>SPARKS BANK</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vitae
              tempora aperiam animi unde adipisci autem nam error dignissimos.
              Ducimus repellendus dolorem quibusdam et, incidunt sint nulla
              magnam necessitatibus velit.
            </p>
          </div>
          <div className="col-lg-4 col-md-12">
            <h4>SERVICES</h4>
            <ul>
              <li>
                <Link to="/createnewuser">Create New Customer</Link>
              </li>
              <li>
              <Link to="/customertable">All Customer</Link>
              </li>
              <li>
              <Link to="/transactionhistory">All Transactions</Link>
              </li>
              <li>
              <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12">
            <h4>ADDRESS</h4>
            <p>
              1444 Adams Avenue,Hyattsville,Maryland,
              <br />
              Pin Code- 20783 ,<br />
              United States
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
}
