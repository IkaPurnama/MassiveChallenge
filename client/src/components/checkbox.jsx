import Form from 'react-bootstrap/Form';

function CheckBox() {
  return (
    <Form>
      {['checkbox'].map((type) => (
        <div
          key={`default-${type}`}
          style={{ display: 'flex', alignItems: 'center'}}
        >
          <Form.Check
            type={type}
            id={`default-${type}`}
            label={<span style={{ fontSize: '12px'}}>Pembayaran Selesai</span>}
          />
        </div>
      ))}
    </Form>
  );
}

export default CheckBox;
