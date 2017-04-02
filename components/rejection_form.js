import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';

export default (props) => (
    <div className="panel">
        <form className="md-grid">
            <TextField
                id="askee"
                label="Askee"
                customSize="title"
                className="md-cell md-cell--12"
                required
            />
            <TextField
                id="question"
                label="Question"
                rows={2}
                className="md-cell md-cell--12"
                required
            />
            <Button raised label="SUBMIT" />
        </form>
    </div>
)