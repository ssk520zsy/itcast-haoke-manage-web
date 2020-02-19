import { Upload, Icon, Modal } from 'antd';

class PicturesWall extends React.Component {
  constructor(props) {
    super(props);

    //  处理默认图片
    let fileList = [];
    if (this.props.fileList) {
      fileList = this.props.fileList.split(',').map(item => {
        return {
          uid: item,
          name: item,
          status: 'done',
          url: item,
        }
      });
    }
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: fileList,
    };
  }
    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => {
      this.setState({ fileList });
      this.props.handleFileList(this.state.fileList);
    }

    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div>
                <Upload
                    action="/haoke/pic/upload"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 5 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
    }
}

export default PicturesWall;
