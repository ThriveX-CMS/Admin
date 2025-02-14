import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { editWebDataAPI } from '@/api/Project';
import { Web } from '@/types/app/project'
import { useWebStore } from '@/stores';

const WebPage = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const web = useWebStore(state => state.web)
    const setWeb = useWebStore(state => state.setWeb)

    const onSubmit = async (values: Web) => {
        setLoading(true);
        await editWebDataAPI(values);
        message.success("🎉 编辑网站成功");

        setWeb(values)
        form.setFieldsValue(values);
        setLoading(false);
    };

    return (
        <div>
            <h2 className="text-xl pb-4 pl-10">网站配置</h2>

            <Form
                form={form}
                size='large'
                layout="vertical"
                onFinish={onSubmit}
                initialValues={web}
                className="w-full lg:w-[500px] md:ml-10"
            >
                <Form.Item
                    label="网站名称"
                    name="title"
                    rules={[{ required: true, message: '网站名称不能为空' }]}
                >
                    <Input placeholder="Thrive" />
                </Form.Item>

                <Form.Item
                    label="网站副标题"
                    name="subhead"
                    rules={[{ required: true, message: '网站副标题不能为空' }]}
                >
                    <Input placeholder="花有重开日, 人无再少年" />
                </Form.Item>

                <Form.Item
                    label="网站链接"
                    name="url"
                    rules={[{ required: true, message: '网站链接不能为空' }]}
                >
                    <Input placeholder="https://liuyuyang.net/" />
                </Form.Item>

                <Form.Item
                    label="网站图标"
                    name="favicon"
                    rules={[{ required: true, message: '网站图标不能为空' }]}
                >
                    <Input placeholder="https://liuyuyang.net/favicon.ico" />
                </Form.Item>

                {/* <Form.Item
                    label="光亮主题LOGO"
                    name="lightLogo"
                    rules={[{ required: true, message: '网站LOGO不能为空' }]}
                >
                    <Input placeholder="https://liuyuyang.net/logo.png" />
                </Form.Item>

                <Form.Item
                    label="暗黑主题LOGO"
                    name="darkLogo"
                    rules={[{ required: true, message: '网站LOGO不能为空' }]}
                >
                    <Input placeholder="https://liuyuyang.net/logo.png" />
                </Form.Item> */}

                <Form.Item
                    label="网站描述"
                    name="description"
                    rules={[{ required: true, message: '网站描述不能为空' }]}
                >
                    <Input placeholder="记录前端、Python、Java点点滴滴" />
                </Form.Item>

                <Form.Item
                    label="网站关键词"
                    name="keyword"
                    rules={[{ required: true, message: '网站关键词不能为空' }]}
                >
                    <Input placeholder="Java,前端,Python" />
                </Form.Item>

                {/* <Form.Item
                    label="随机文章封面"
                    name="covers"
                    rules={[{ required: true, message: '网站随机封面不能为空' }]}
                >
                    <Input.TextArea
                        autoSize={{ minRows: 2, maxRows: 10 }}
                        placeholder="随机文章封面"
                    />
                </Form.Item>

                <Form.Item
                    label="社交网站"
                    name="social"
                    rules={[{ required: true, message: '社交网站不能为空' }]}
                >
                    <Input.TextArea
                        autoSize={{ minRows: 2, maxRows: 10 }}
                        placeholder="社交账号"
                    />
                </Form.Item> */}

                <Form.Item
                    label="底部信息"
                    name="footer"
                    rules={[{ required: true, message: '网站底部信息不能为空' }]}
                >
                    <Input placeholder="记录前端、Python、Java点点滴滴" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading} block>编辑网站</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default WebPage;
