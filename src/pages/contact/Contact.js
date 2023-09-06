import { DecoderText } from 'components/DecoderText';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { tokens } from 'components/ThemeProvider/theme';
import { Transition } from 'components/Transition';
import { useState } from 'react';
import { cssProps, msToNum, numToMs } from 'utils/style';
import styles from './Contact.module.css';

export const Contact = () => {
  const [complete, setComplete] = useState(false);

  const initDelay = tokens.base.durationS;

  return (
    <Section className={styles.contact}>
      <Meta
        title="Contact"
        description="Send me a message if you’re interested in discussing a project or if you just want to say hi"
      />
      <Transition unmount in={!complete} timeout={1600}>
        {(visible, status) => (
          <form className={styles.form} method="post">
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText
                text="This page is currently in development."
                start={status !== 'exited'}
                delay={300}
              />
              <br />
              <br />
              <DecoderText
                text="Feel free to reach out via email at : "
                start={status !== 'exited'}
                delay={300}
              />
              <DecoderText
                text=" shoaibullakhan15@gmail.com."
                start={status !== 'exited'}
                delay={300}
              />
              <br />
              <br />
              <DecoderText
                text="Feel free to reach me by phone at:  "
                start={status !== 'exited'}
                delay={300}
              />
              <br />

              <DecoderText
                text="+91-8830488649"
                start={status !== 'exited'}
                delay={300}
              />
            </Heading>
          </form>
        )}
      </Transition>
       
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
