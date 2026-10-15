import { useState } from 'react'

const styles = {
  page: {
    boxSizing: 'border-box',
    minHeight: '100vh',
    display: 'grid',
    placeItems: 'center',
    padding: '24px',
    color: '#20302d',
    background: '#f3f6f5',
    fontFamily: 'Arial, sans-serif',
  },
  panel: {
    boxSizing: 'border-box',
    width: 'min(100%, 440px)',
    padding: '28px',
    background: '#fff',
    border: '1px solid #d9e1df',
    borderRadius: '8px',
  },
  title: { margin: '0 0 8px' },
  intro: { margin: '0 0 24px', color: '#52615e' },
  form: { display: 'grid', gap: '16px' },
  label: { display: 'grid', gap: '6px', fontWeight: 600 },
  field: {
    boxSizing: 'border-box',
    width: '100%',
    padding: '10px',
    border: '1px solid #aebbb7',
    borderRadius: '4px',
    font: 'inherit',
  },
  button: {
    padding: '11px',
    border: 0,
    borderRadius: '4px',
    color: '#fff',
    background: '#246b59',
    font: 'inherit',
    cursor: 'pointer',
  },
  status: { margin: 0, color: '#246b59' },
}

function App() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    event.currentTarget.reset()
    setSubmitted(true)
  }

  return (
    <main style={styles.page}>
      <section style={styles.panel}>
        <h1 style={styles.title}>Contact us</h1>
        <p style={styles.intro}>Send us a message and we will get back to you.</p>

        <form
          style={styles.form}
          onSubmit={handleSubmit}
          onInput={() => setSubmitted(false)}
        >
          <label style={styles.label}>
            Name
            <input
              style={styles.field}
              name="name"
              type="text"
              autoComplete="name"
              required
            />
          </label>

          <label style={styles.label}>
            Email
            <input
              style={styles.field}
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </label>

          <label style={styles.label}>
            Message
            <textarea
              style={{ ...styles.field, resize: 'vertical' }}
              name="message"
              rows="4"
              required
            />
          </label>

          <button style={styles.button} type="submit">
            Send message
          </button>
          {submitted && (
            <p style={styles.status} role="status">
              Message sent. Thank you!
            </p>
          )}
        </form>
      </section>
    </main>
  )
}

export default App
