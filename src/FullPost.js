import React from "react";
import { Link } from "react-router-dom";

function FullPost() {
  return (
    <div className="inner">
      <h1 class="post-full-title">
        Michal Kawalec on His Multi-Day Transalp Bike Journey
      </h1>
      <figure
        class="post-full-image"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost//2021/08/Michal-Kawalec-Bike--1-.jpg)",
        }}
      ></figure>
      <section className="post-full-content">
        <div className="post-content">
          <p>
            <a href="https://x-team.com/blog/interview-michal-kawalec/">
              Michal Kawalec
            </a>{" "}
            has been a Senior Software Engineer at X-Team for many years. In the
            spirit of{" "}
            <a href="https://x-team.com/blog/keep-moving-forward/">
              Keep Moving Forward
            </a>
            , he recently completed a spectacular multi-day Transalp bike
            journey that took him across the Alps. In this interview, we discuss
            why he did it, how it went, and what he would recommend to other
            cyclists who want to do the same.
          </p>
          <p>
            <strong>
              How did you come up with the idea to go on a massive mountain bike
              journey across the Alps?
            </strong>
          </p>
          <p>
            I had{" "}
            <a href="https://bike-transalp.de/en/info/general-info/">
              read about the Transalp Race
            </a>{" "}
            and had seen some people doing Transalps on YouTube. So I decided a
            Transalp journey would be a great way to break my mountain bike
            hiatus that had happened because of the pandemic.
          </p>
          <p>
            <strong>An excellent idea! What was your itinerary?</strong>
          </p>
          <p>
            I got in the car on the 23rd of July, drove to Landeck in Austria,
            left the car there, took a bus to Nauders, and started
            mountainbiking from there the following day. The first day was
            briefly in Austria. The rest of the trip was in Italy.{" "}
          </p>
          <p>
            The whole trip took a week and I slept in random hostels along the
            way. On the last day, I took a train from the finish location back
            to Landeck to retrieve my car.
          </p>
          <figure className="kg-card kg-image-card kg-width-wide kg-card-hascaption">
            <img
              src="https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost//2021/08/Transalp-Journey--1-.jpg"
              className="kg-image"
              alt="A map of Michal's Transalp journey"
              loading="lazy"
              width={1000}
              height={473}
            />
            <figcaption>
              Michal's Transalp journey{" "}
              <a href="https://en.mapy.cz/zakladni?moje-mapy&x=10.5556452&y=46.2365643&z=8&cat=mista-trasy&mid=60be75ccb83f9c79493f72c6">
                mapped out
              </a>
            </figcaption>
          </figure>
          <p>
            <strong>What was your favorite experience during the trip?</strong>
          </p>
          <p>
            Coasting down a mountain pass after climbing 1600 meters while
            passing marmots and horses. That mountain pass on the first day was
            unreal.
          </p>
          <figure className="kg-card kg-image-card kg-width-wide kg-card-hascaption">
            <img
              src="https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost//2021/08/Beautiful-Scenery-2--1-.jpg"
              className="kg-image"
              alt="Horses grazing between mountains"
              loading="lazy"
              width={1000}
              height={563}
            />
            <figcaption>Horses along the way</figcaption>
          </figure>
          <p>
            <strong>
              I can imagine! And what didn't go according to plan? Were there
              things that surprised you?
            </strong>
          </p>
          <p>
            I had allocated a day for getting to my starting location, but that
            went all sideways. Five highway crashes caused me to arrive four
            hours late, only forty minutes before the last bus to Nauders.{" "}
          </p>
          <p>
            Then I decided, for good measure, to clean my brake rotors with a
            chain degreaser. But the degreaser had some chain lubricant in it
            and it completely trashed my brake pads. Thankfully, I had a few
            spare brake pads and I found a bicycle repair shop early on the
            first day that lent me some isopropyl alcohol.
          </p>
          <p>
            <strong>What about your legs? Was it physically tough?</strong>
          </p>
          <p>
            Extremely tough. To be honest, I was completely unprepared for how
            tough it ended up being 😀. I decided to do the trip two months
            before the start date and trained by riding three eighty km rides a
            week. But the area where I live (Poznań, Poland) is almost
            completely flat. The highest hill is only sixty meters high.
          </p>
          <p>
            So even though my training distances were fairly long, I was not
            prepared for the amount of energy I'd need to ascend two thousand
            meters in a day. Ultimately, I ended up riding half the route and
            taking the bus for the other half 😀.
          </p>
          <figure className="kg-card kg-gallery-card kg-width-wide kg-card-hascaption">
            <div className="kg-gallery-container">
              <div className="kg-gallery-row">
                <div
                  className="kg-gallery-image"
                  style={{ flex: "1.7762 1 0%" }}
                >
                  <img
                    src="https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost//2021/08/Smiling-Pain-2.jpg"
                    width={1000}
                    height={563}
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div
                  className="kg-gallery-image"
                  style={{ flex: "1.49925 1 0%" }}
                >
                  <img
                    src="https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost//2021/08/Smiling-Pain-1.jpg"
                    width={1000}
                    height={667}
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <figcaption>Smiling through the pain</figcaption>
          </figure>
          <p>
            <strong>
              Two thousand meters a day with little hill training must've been
              extremely tough. What equipment did you take? What type of bike,
              gear?
            </strong>
          </p>
          <p>
            I have a Kross Soil Ex full suspension bike with a lot of parts
            swapped out. The brakes are Magura MT7, which are wonderful if
            somewhat tricky to align properly. The dropper post is a BikeYoke
            Revive. And I run CushCore inserts in my tires.{" "}
          </p>
          <p>
            The tires were a Maxxis Minion DHR II/Rekon combo. I usually run
            Schwalbes, but they are hard to come by because of the pandemic and
            I was due for tire changes. But I loved these Maxxis Minion tires
            and can highly recommend the combo.
          </p>
          <p>
            I also had a 35-liter backpack with all the clothes, bicycle repair
            gear, and a camera. I followed{" "}
            <a href="https://www.1enduro.pl/transalp-co-zabrac-i-jak-sie-spakowac/">
              this checklist
            </a>{" "}
            (in Polish) with some modifications. The whole backpack weighed just
            shy of eight kilos.
          </p>
          <figure className="kg-card kg-gallery-card kg-width-wide kg-card-hascaption">
            <div className="kg-gallery-container">
              <div className="kg-gallery-row">
                <div
                  className="kg-gallery-image"
                  style={{ flex: "1.49925 1 0%" }}
                >
                  <img
                    src="https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost//2021/08/Beautiful-Scenery-3--1-.jpg"
                    width={1000}
                    height={667}
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div
                  className="kg-gallery-image"
                  style={{ flex: "1.49925 1 0%" }}
                >
                  <img
                    src="https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost//2021/08/Beautiful-Scenery-1--1-.jpg"
                    width={1000}
                    height={667}
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <figcaption>Beautiful scenery along the way</figcaption>
          </figure>
          <p>
            <strong>
              Pretty lightweight for such a heavy trip. What's the one thing
              you'd recommend to other people who want to do the same?
            </strong>
          </p>
          <p>
            This trip really convinced me of the advantages of electric mountain
            bikes. I would want to repeat the trip, but I'd most likely do it on
            an electric bike instead. There are just too many beautiful sights
            in the Alps and only finite energy in my legs.
          </p>
          <p>
            Do you want to join a company where you work with people who push
            themselves out of their comfort zones like this? You can! X-Team is
            always looking for experienced developers.{" "}
            <a href="https://x-team.com/developers/">
              Send through your application today
            </a>
            .
          </p>
        </div>
      </section>
      <hr />
      <footer class="post-full-footer">
        <Link to="/blog/author/tdmoor">
          <section class="author-card">
            <img
              class="author-profile-image"
              src="https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost//2021/07/Thomas-Tbilisi-Headshot.jpg"
              alt="Thomas De Moor"
            />
            <section class="author-card-content">
              <h4 class="author-card-name">Thomas De Moor</h4>
            </section>
          </section>
        </Link>
      </footer>
    </div>
  );
}

export default FullPost;
