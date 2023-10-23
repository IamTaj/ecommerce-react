import React from 'react'
import "./about.css";

export default function About() {
  return (
    <>
      <div className="maindiv">
        <div className="banner">
          <h3 className="heading">About Us</h3>
        </div>
        <div className="div1">
          <div className="image-banner">
            <img
              src="https://www.goodnewsnetwork.org/wp-content/uploads/2019/04/People-Smiling-Public-Domain.jpg"
              alt=""
              width={"600px"}
            />
          </div>
          <p className="abt">
            We’re a fully distributed team of 79 people living and working in 22
            countries around the world. <br />
            And we’re working to build the best products to help our customers
            build their brands and grow their businesses on social media.
          </p>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59811518.87771588!2d62.4184461520893!3d23.797062037023224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3663f18a24cbe857%3A0xa9416bfcd3a0f459!2sAsia!5e0!3m2!1sen!2sin!4v1675660406087!5m2!1sen!2sin"
              width="100%"
              height="250px"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <button className='btn btn-primary'>Meet Our Global Team</button>
          </div>
          <p className="abt">
            We’ve always aimed to do things a little differently at Buffer.
            Since the early days, we’ve had a focus on building one of the most
            unique and fulfilling workplaces by rethinking a lot of traditional
            practices. <br /> <br />
            A commitment to supporting our team and our customers has helped
            Buffer grow from humble beginnings to now serving more than 140,000
            users. Our passion for making meaningful connections flows through
            everything we do. <br /> <br />
            We care about building a quality product, trusted relationships with
            our customers, and a sense of community that connects our customers
            and team with one another. <br /> <br />
            To learn more about our approach to business and work, feel free to
            hop on over to our Open Blog.
          </p>

          <button className="btn btn-primary">Open Blogs</button>
        </div>
        <div className="div2">
          <div className="text">
            <p>
              <span className="teammates">405</span> <br />
              teammates
            </p>
          </div>
          <div className="text">
            <p>
              <span className="countries">23</span> <br />
              countries
            </p>
          </div>
          <div className="text">
            <p>
              <span className="user">140,000+</span> <br />
              users
            </p>
          </div>
        </div>
        <div className="div3">
          <h2>Our Values</h2>
          <div className="div3-1">
            <p>
              We want to build a different type of company that’s focused not
              only on the bottom line, but also the happiness of our customers
              and team, and our personal growth along the journey. Here are the
              values that collectively guide our decisions and actions:
            </p>
          </div>

          <ol className="list">
            <button
              class="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample1"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <li> Default to transparency &nbsp; &nbsp; &nbsp; &nbsp;˅</li>
            </button>
            <br />
            <div class="collapse" id="collapseExample1">
              <div class="card card-body">
                <ul>
                  <li>
                    As individuals, we view transparency as a lifestyle of
                    authenticity and honesty.
                  </li>
                  <li>
                    As a team, we view transparency as an effective way to work
                    remotely and establish a culture of trust
                  </li>
                  <li>
                    As a company, we view transparency as a tool to help others.
                  </li>
                  <li>
                    We share early in the decision process to avoid “big
                    revelations.”
                  </li>
                  <li>
                    We strive to make all communication clear and avoid making
                    assumptions
                  </li>
                </ul>
              </div>
            </div>
            <button
              class="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample2"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <li>
                {" "}
                Cultivate positivity &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;˅
              </li>
            </button>
            <br />
            <div class="collapse" id="collapseExample2">
              <div class="card card-body">
                <ul>
                  <li>
                    We strive to approach things in a positive way while
                    realizing all emotions are valid.
                  </li>
                  <li>
                    We avoid non-constructive criticism of team members or
                    customers.
                  </li>
                  <li>
                    We assume the best of others because we may lack full
                    context.
                  </li>
                  <li>
                    We believe that constructive, honest feedback is an
                    opportunity for growth.
                  </li>
                  <li>
                    We push through any artificial harmony to work towards a
                    better environment, product or concept.
                  </li>
                </ul>
              </div>
            </div>
            <button
              class="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample3"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <li>
                {" "}
                Show gratitude&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;˅
              </li>
            </button>
            <br />
            <div class="collapse" id="collapseExample3">
              <div class="card card-body">
                <ul>
                  <li>
                    We regularly stop and demonstrate gratitude for our
                    circumstances
                  </li>
                  <li>
                    We are thankful for our customers and approach customer
                    conversations with the knowledge that it’s a privilege to
                    serve them.
                  </li>
                  <li>
                    We practice humility, operate as no-ego doers and do not
                    attach our personal selves to ideas.
                  </li>
                  <li>
                    We are grateful for the work teammates do to push the
                    company forward.
                  </li>
                  <li>
                    We display gratitude for the platforms, tools and open
                    source code and communities that make our company possible
                    and view it as our duty to give back
                  </li>
                </ul>
              </div>
            </div>
            <button
              class="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample4"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <li>
                {" "}
                Practice reflection &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; ˅
              </li>
            </button>
            <br />
            <div class="collapse" id="collapseExample4">
              <div class="card card-body">
                <ul>
                  <li>
                    We believe the act of introspection is where true learning
                    and life-changing adjustments originate.
                  </li>
                  <li>
                    We approach discussions intentionally and think through all
                    angles.
                  </li>
                  <li>
                    We listen first and then listen more: seeking first to
                    understand, then to be understood.
                  </li>
                  <li>
                    We step back from the day-to-day and reflect on overall
                    themes that will make an impact.
                  </li>
                  <li>
                    We take the approach that everything is a hypothesis and we
                    could be wrong.
                  </li>
                </ul>
              </div>
            </div>
          </ol>
        </div>
        <div className="div4">
          <div className="div4-1">
            <h2>Transparency</h2>
            <p>
              We try our best to live up to our value of "Default to
              Transparency." Here's an overview of a few of the things we've
              made transparent at Buffer
            </p>
          </div>
          <div className="div4-2">
            <div>
              <img
                src="https://cdn3.iconfinder.com/data/icons/seo-and-internet-marketing-11/512/16-64.png"
                alt=""
              />
              <h3>Quality</h3>
              <p>All products are quality assurance and worthy</p>
            </div>
            <div>
              <img
                src="https://cdn2.iconfinder.com/data/icons/miscellaneous-244-line/128/diversity_diversification_ethnicity_teamwork_business_variety_democracy-64.png"
                alt=""
              />
              <h3>Diversity</h3>
              <p>We've open source our diversity & inclusion of products</p>
            </div>
            <div>
              <img
                src="https://cdn1.iconfinder.com/data/icons/shopping-346/24/package-delivery-transport-shipping-truck-64.png"
                alt=""
              />
              <h3>Free Shipping</h3>
              <p>We provide fast shipping without any convienent charges</p>
            </div>
            <div>
              <img
                src="https://cdn1.iconfinder.com/data/icons/shopping-26/48/phone-24hrs-64.png"
                alt=""
              />
              <h3>24/7 Support</h3>
              <p>24/7 support from our customer service team</p>
            </div>
          </div>
        </div>
        <div className="div5">
          <h3>Team</h3>
          <p>
            We’re committed to building a diverse team and a work environment
            that’s inclusive of people of all backgrounds. <br />
            Get to know the wonderful team who’s building our product,
            supporting our customers, and creating educational content.
          </p>
        </div>
        <div className="div6">
          <div className="card">
            <div className="photo">
              <img
                className="people"
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div className="description">
              <h2>Anish Mathew</h2>
              <p>Hi this is Anish</p>
              <a className="link" href="/">
                Buy me a coffee{" "}
                <img
                  className="coffee"
                  src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-93-64.png"
                  alt=""
                />{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="photo">
              <img
                className="people"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSmamfjRN2JNy4dqn7nC7OpVQhS0MObSA3iw&usqp=CAU"
                alt=""
              />
            </div>
            <div className="description">
              <h2>John Wick</h2>
              <p>Hi this is John</p>
              <a className="link" href="/">
                Buy me a coffee{" "}
                <img
                  className="coffee"
                  src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-93-64.png"
                  alt=""
                />{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="photo">
              <img
                className="people"
                src="https://media.istockphoto.com/id/1146488158/photo/close-up-photo-beautiful-amazing-she-her-lady-make-take-selfies-show-hand-arm-palm-air.jpg?s=612x612&w=0&k=20&c=_o373lz2wuyXYSsQJ1LpBRVWffevHkByJsyDKp_ZriI="
                alt=""
                width={"275px"}
                height={"183px"}
              />
            </div>
            <div className="description">
              <h2>Sara D'Suza</h2>
              <p>Hi this is Sara</p>
              <a className="link" href="/">
                Buy me a coffee{" "}
                <img
                  className="coffee"
                  src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-93-64.png"
                  alt=""
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
